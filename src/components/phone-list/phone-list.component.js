
import phoneListModule from './phone-list.module';

class PhoneListController {
    constructor(Phone, PhoneClaimForm) {
        Phone.loadAll();
        this.filters = Phone.filters;
        this.phones = Phone.phones;
        this.PhoneClaimForm = PhoneClaimForm;
    }
    openClaimForm(phoneId) {
        this.PhoneClaimForm.open(phoneId);
    }
}
PhoneListController.$inject = ['Phone', 'PhoneClaimForm'];

export default phoneListModule
    .component('phoneList', {
        template: require('./phone-list.template.html'),
        controller: PhoneListController
    });

