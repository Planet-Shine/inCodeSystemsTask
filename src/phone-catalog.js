import angular from 'angular';
import 'angular-ui-router';

// Components
import './phone-list/phone-list.component';
import './phone-details/phone-details.component';
import './phone-claim-form/phone-claim-form.component';
import './hierarchic-categories/hierarchic-categories.component';
import './header/header.component';
import './phone-catalog-app/phone-catalog-app.component';
import './image-gallery/image-gallery.component';
import './float-panel/float-panel.component';
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
