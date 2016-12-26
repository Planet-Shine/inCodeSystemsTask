import angular from 'angular';
import './phone/phone.service';
import './phone/phone.module';
import checkmarkFilterFactory from './checkmark/checkmark.filter';

const coreModule = angular.module('core', [
    'core.phone'
]);

checkmarkFilterFactory(coreModule);

export default coreModule;
