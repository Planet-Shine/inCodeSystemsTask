/* eslint */
/* globals beforeEach, it, expect, window, angular */

import '../core.module.js';

describe('Phone', function () {
    var $httpBackend;

    beforeEach(() => {
        angular.mock.module('core');
        jasmine.addCustomEqualityTester(angular.equals);
        angular.mock.inject(($injector) => {
            $httpBackend = $injector.get('$httpBackend');
        });
    });

    it('should create a `phones` property with 2 phones fetched with `$http`', function () {
        $httpBackend.expectGET('phones/phones.json')
            .respond([
                { name: 'Nexus S' },
                { name: 'Motorola DROID' }
            ]);
        angular.mock.inject((Phone) => {
            expect(Phone.phones).toEqual([]);
            Phone.loadAll();

            $httpBackend.flush();
            expect(Phone.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });
    });

    it('should create a `phone` fetched with `$http`', function () {

        $httpBackend.expectGET('phones/testPhone.json')
            .respond({
                id: 15,
                name: 'Nexus S'
            });

        angular.mock.inject((Phone) => {
            expect(Phone.phone).toEqual({});
            Phone.loadById('testPhone');


            $httpBackend.flush();
            expect(Phone.phone).toEqual({
                id: 15,
                name: 'Nexus S'
            });
        });
    });

    it('should create a `phones` property with 3 phones fetched with `$http` and get some by ids', function () {
        $httpBackend.expectGET('phones/phones.json')
            .respond([
                { id: 1, name: 'Nexus S' },
                { id: 3, name: 'Motorola DROID' },
                { id: 5, name: 'Samsung' }
            ]);

        angular.mock.inject((Phone) => {
            expect(Phone.phones).toEqual([]);
            Phone.loadAll();

            $httpBackend.flush();
            expect(Phone.getItemById(3)).toEqual({ id: 3, name: 'Motorola DROID' });
            expect(Phone.getItemById(1)).toEqual({ id: 1, name: 'Nexus S' });
            expect(Phone.getItemById(5)).toEqual({ id: 5, name: 'Samsung' });
        });
    });
});
