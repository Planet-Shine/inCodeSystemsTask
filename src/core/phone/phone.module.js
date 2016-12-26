'use strict';

import angular from 'angular';
import 'angular-resource';
import phoneServiceFactory from './phone.service';

const corePhoneModule = angular.module('core.phone', ['ngResource']);

phoneServiceFactory(corePhoneModule);

export default corePhoneModule;
