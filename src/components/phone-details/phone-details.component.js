
import phoneDetailsModule from './phone-details.module';

class PhoneDetailsController {
    static $inject = ['Phone', '$scope', 'PhoneClaimForm'];
    PhoneClaimForm = null;
    Phone = null;
    phone = null;
    constructor(Phone, $scope, PhoneClaimForm) {
        this.PhoneClaimForm = PhoneClaimForm;
        this.Phone = Phone;

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

export default phoneDetailsModule
    .component('phoneDetails', {
        bindings: {
            phoneId: '<'
        },
        template: require('./phone-details.template.html'),
        controller: PhoneDetailsController
    });
