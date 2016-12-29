
import phoneListModule from './phone-list.module';

export default phoneListModule
    .component('phoneList', {
        template: require('./phone-list.template.html'),
        controller: ['Phone', 'PhoneClaimForm', function (Phone, PhoneClaimForm) {
            Phone.loadAll();
            this.phones = Phone.phones;
            this.openClaimForm = (phoneId) => {
                PhoneClaimForm.open(phoneId);
            };
        }]
    });

