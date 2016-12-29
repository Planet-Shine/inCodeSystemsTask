
import phoneDetailsModule from './phone-details.module';

export default phoneDetailsModule
    .component('phoneDetails', {
        bindings: {
            phoneId: '<'
        },
        template: require('./phone-details.template.html'),
        controller: ['Phone', '$scope', 'PhoneClaimForm', function (Phone, $scope, PhoneClaimForm) {
            this.onPhoneIdChanges = (newValue) => {
                if (newValue) {
                    Phone.loadById(this.phoneId);
                    this.phone = Phone.phone;
                }
            };

            this.openClaimForm = (phoneId) => {
                PhoneClaimForm.open(phoneId);
            };

            $scope.$watch('$ctrl.phoneId', this.onPhoneIdChanges);
        }]
    });
