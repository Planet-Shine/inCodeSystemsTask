/* eslint */
/* globals beforeEach, it, expect, window, angular */

import '../core.module.js';

describe('claimService', function () {

    beforeEach(() => {
        angular.mock.module('core');
    });

    it('should be success data promise', function (done) {
        angular.mock.inject((Claim) => {
            Claim.createClaim({}).then((data = {}) => {
                expect(data.success).toBe(true);
                done();
            });
        });
    });
});
