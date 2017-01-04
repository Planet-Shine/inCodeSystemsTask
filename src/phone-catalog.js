import angular from 'angular';
import 'angular-ui-router';

// Components
import './components/phone-list/phone-list.component';
import './components/phone-details/phone-details.component';
import './components/phone-claim-form/phone-claim-form.component';
import './components/hierarchic-categories/hierarchic-categories.component';
import './components/header/header.component';
import './components/phone-catalog-app/phone-catalog-app.component';
import './components/image-gallery/image-gallery.component';
import './components/float-panel/float-panel.component';
import './core/core.module';

export default angular.module('phoneCatalog', [
    'floatPanel',
    'imageGallery',
    'header',
    'phoneDetails',
    'phoneClaimForm',
    'hierarchicCategories',
    'phoneList',
    'phoneCatalogApp',
    'core',
    'ui.router'
]);
