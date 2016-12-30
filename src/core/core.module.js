import angular from 'angular';
import './phone/phone.service';
import './phone/phone.module';
import './map/addressAutocomplete.directive';
import './map/map.module';
import './claim/claim.service';
import './treeList/treeList.component';

import checkmarkFilterFactory from './checkmark/checkmark.filter';
import categoriesFilterFactory from './categories/categories.filter';
import intervalFilterFactory from './interval/interval.filter';

const coreModule = angular.module('core', [
    'treeList',
    'map',
    'claim',
    'core.phone'
]);

checkmarkFilterFactory(coreModule);
categoriesFilterFactory(coreModule);
intervalFilterFactory(coreModule);

export default coreModule;
