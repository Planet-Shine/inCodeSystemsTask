
import phoneCatalogAppModule from './phone-catalog-app.module';

class PhoneCatalogAppController {
    constructor() {

    }
}

export default phoneCatalogAppModule
    .component('phoneCatalogApp', {
        template: require('./phone-catalog-app.template.html'),
        controller: PhoneCatalogAppController
    });
