
import claimModule from './claim.module';

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
