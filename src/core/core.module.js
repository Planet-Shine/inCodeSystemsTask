import angular from 'angular';
import './phone/phone.service';
import './phone/phone.module';
import './map/addressAutocomplete.directive';
import './map/map.module';
import './claim/claim.service';
import checkmarkFilterFactory from './checkmark/checkmark.filter';

const coreModule = angular.module('core', [
    'map',
    'claim',
    'core.phone'
]);

checkmarkFilterFactory(coreModule);

export default coreModule;
