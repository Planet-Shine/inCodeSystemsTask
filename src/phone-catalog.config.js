import phoneCatalogModule from './phone-catalog.js';

phoneCatalogModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    const phoneListState = {
        name: 'phones',
        url: '/phones',
        views: {
            '': {
                component: 'phoneList'
            },
            'header': {
                component: 'header',
                bindings: { state: 'stateResolving' }
            }
        },
        resolve: {
            state: function () {
                return 'phones';
            }
        }
    };
    const phoneDetailsState = {
        name: 'phone',
        url: '/phone/{phoneId}',
        views: {
            '': {
                component: 'phoneDetails',
                bindings: { phoneId: 'phoneId' }
            },
            'header': {
                component: 'header',
                bindings: { state: 'state' }
            }
        },
        resolve: {
            state: function () {
                return 'phone';
            },
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
