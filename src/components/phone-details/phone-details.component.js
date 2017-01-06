
import phoneDetailsModule from './phone-details.module';

class PhoneDetailsController {
    constructor(Phone, $scope, PhoneClaimForm) {
        this.PhoneClaimForm = PhoneClaimForm;
        this.Phone = Phone;
        this.phone = null;

        this.onPhoneIdChanges = this.onPhoneIdChanges.bind(this);

        $scope.$watch('$ctrl.phoneId', this.onPhoneIdChanges);
    }
    onPhoneIdChanges (newValue) {
        if (newValue) {
            this.Phone.loadById(this.phoneId);
            this.phone = this.Phone.phone;
        }
    }
    openClaimForm (phoneId) {
        this.PhoneClaimForm.open(phoneId);
    }
}
PhoneDetailsController.$inject = ['Phone', '$scope', 'PhoneClaimForm'];

export default phoneDetailsModule
    .component('phoneDetails', {
        bindings: {
            phoneId: '<'
        },
        template: require('./phone-details.template.html'),
        controller: PhoneDetailsController
    });
