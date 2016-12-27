import phoneCatalogModule from './phone-catalog.js';

phoneCatalogModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    const phoneListState = {
        name: 'phones',
        url: '/phones',
        component: 'phoneList'
    };
    const phoneDetailsState = {
        name: 'phone',
        url: '/phone/{phoneId}',
        component: 'phoneDetails',
        resolve: {
            phoneId: ['$stateParams', function ($stateParams) {
                return $stateParams.phoneId;
            }]
        }
    };

    $stateProvider
        .state(phoneListState)
        .state(phoneDetailsState);
    $urlRouterProvider.otherwise('/phones');
}]);


phoneCatalogModule.config(['$resourceProvider', function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
