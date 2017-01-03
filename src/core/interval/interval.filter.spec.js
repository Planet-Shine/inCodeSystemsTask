/* eslint */
/* globals beforeEach, it, expect, window, angular */

import '../core.module.js';

describe('interval', function () {

    beforeEach(() => {
        angular.mock.module('core');
        jasmine.addCustomEqualityTester(angular.equals);
    });

    it('should filter accordingly to minimum and maximum', function () {
        angular.mock.inject((intervalFilter) => {
            (() => {
                const input = [
                    {
                        id: 53,
                        name: 'Petr',
                        age: 53,
                        height: 180
                    },
                    {
                        id: 40,
                        name: 'Ivan',
                        age: 25,
                        height: 163
                    },
                    {
                        id: 35,
                        name: 'Olga',
                        age: 20,
                        height: 175
                    },
                    {
                        id: 25,
                        name: 'Inna',
                        age: 35,
                        height: 165
                    },
                    {
                        id: 25,
                        name: 'Andrey',
                        age: 15,
                        height: 150
                    }
                    ],
                    minimum = {
                        age: 20,
                        height: 165
                    },
                    maximum = {
                        age: 80,
                        height: 178
                    },
                    expectedResult = [
                        input[2],
                        input[3]
                    ];

                expect(intervalFilter(input, minimum, maximum)).toEqual(expectedResult);
            })();

            (() => {
                const input = [
                    {
                        id: 53,
                        name: 'Petr',
                        age: 25,
                        height: 195
                    },
                    {
                        id: 40,
                        name: 'Ivan',
                        age: 78,
                        height: 160
                    },
                    {
                        id: 35,
                        name: 'Olga',
                        age: 22,
                        height: 168
                    },
                    {
                        id: 25,
                        name: 'Inna',
                        age: 18,
                        height: 180
                    },
                    {
                        id: 25,
                        name: 'Andrey',
                        age: 25,
                        height: 175
                    },
                    {
                        id: 75,
                        name: 'Grigoriy',
                        age: 100,
                        height: 175
                    },
                    {
                        id: 250,
                        name: 'Andrey',
                        age: 35,
                        height: 205
                    }
                    ],
                    minimum = {
                        age: 20
                    },
                    maximum = {
                        height: 180
                    },
                    expectedResult = [
                        input[1],
                        input[2],
                        input[4],
                        input[5]
                    ];

                expect(intervalFilter(input, minimum, maximum)).toEqual(expectedResult);
            })();
        });
    });

});
