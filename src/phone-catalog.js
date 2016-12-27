import angular from 'angular';
import 'angular-ui-router';

// Components
import './phone-list/phone-list.component';
import './phone-details/phone-details.component';
import './phone-claim-form/phone-claim-form.component';
import './hierarchic-categories/hierarchic-categories.component';
import './header/header.component';
import './core/core.module';

export default angular.module('phoneCatalog', [
    'header',
    'phoneDetails',
    'phoneClaimForm',
    'hierarchicCategories',
    'phoneList',
    'core',
    'ui.router'
]);
