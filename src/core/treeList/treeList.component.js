
import treeListModule from './treeList.module';

class TreeListController {
    static $inject = ['$scope'];
    constructor($scope) {
        $scope.$watch('$ctrl.selectedProp', (newValue) => {
            if (newValue === null) {
                this.innerSelectedProp = null;
            }
        });
    }
    onSubSelect(treePoints, prop) {
        this.selectedProp = prop;
        this.onSelect({
            treePoints: [prop, ...treePoints]
        });
    }
    onItemClick(prop) {
        this.selectedProp = prop;
        this.innerSelectedProp = null;
        this.onSelect({
            treePoints: [prop]
        });
    }
}

export default treeListModule.component('treeList', {
    bindings: {
        selectedProp: '=',
        onSelect: '&',
        data: '<'
    },
    template: require('./treeList.template.html'),
    controller: TreeListController
});
