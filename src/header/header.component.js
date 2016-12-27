
import headerModule from './header.module';

export default headerModule
    .component('header', {
        bindings: {
            state: '<'
        },
        template: require('./header.template.html'),
        controller: [function () {

        }]
    });

