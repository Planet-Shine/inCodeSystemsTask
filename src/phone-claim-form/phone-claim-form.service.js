
import phoneDetailsModule from './phone-claim-form.module';

export default phoneDetailsModule
    .factory('PhoneClaimForm', function () {
        return {
            open: function (phoneId) {
                this.formState.isOpened = true;
                this.formState.phoneId = phoneId;
            },
            formState: {
                isOpened: false
            }
        };
    });
