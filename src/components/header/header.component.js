
import headerModule from './header.module';

class HeaderController {
    constructor() {

    }
}

export default headerModule
    .component('header', {
        bindings: {
            state: '<'
        },
        template: require('./header.template.html'),
        controller: HeaderController
    });

