
import claimModule from './claim.module';
import Promise from 'promise-polyfill';

export default claimModule.factory('Claim', function () {
    return {
        createClaim: function (newClaim) {
            console.log('newClaim: ');
            console.log(newClaim);
            return Promise.resolve({
                success: true
            });
        }
    };
});
