
import treeListModule from './treeList.module';

export default treeListModule.component('treeList', {
    bindings: {
        selectedProp: '=',
        onSelect: '&',
        data: '<'
    },
    template: require('./treeList.template.html'),
    controller: ['$scope', function ($scope) {
        this.innerSelectedProp = null;
        this.onSubSelect = (treePoints, prop) => {
            this.selectedProp = prop;
            this.onSelect({
                treePoints: [prop, ...treePoints]
            });
        };
        this.onItemClick = (prop) => {
            this.selectedProp = prop;
            this.innerSelectedProp = null;
            this.onSelect({
                treePoints: [prop]
            });
        };
        $scope.$watch('$ctrl.selectedProp', (newValue) => {
            if (newValue === null) {
                this.innerSelectedProp = null;
            }
        });
    }]
});
