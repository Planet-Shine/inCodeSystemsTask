/* eslint */
/* globals google */

import mapModule from './map.module';

export default mapModule.directive('addressAutocomplete', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            new google.maps.places.Autocomplete(
                element[0],
                {
                    types: ['address']
                }
            );
        }
    };
});
