
import phoneListModule from './phone-list.module';

export default phoneListModule
    .component('phoneList', {
        template: require('./phone-list.template.html'),
        controller: ['Phone', function (Phone) {
            Phone.loadAll();
            
            this.phones = Phone.phones;
        }]
    });
