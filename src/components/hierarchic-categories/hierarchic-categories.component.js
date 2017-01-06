
import hierarchicCategoriesModule from './hierarchic-categories.module';

class HierarchicCategoriesController {
    constructor(Phone) {
        this.Phone = Phone;
        this.innerSelectedProp = null;
        this.filters = Phone.getCategoryFilters();
    }
    onSubSelect (treePoints) {
        this.Phone.filters.categories = treePoints;
    }
    clear () {
        this.innerSelectedProp = null;
        this.Phone.filters.categories = [];
    }
}
HierarchicCategoriesController.$inject = ['Phone'];


export default hierarchicCategoriesModule
    .component('hierarchicCategories', {
        template: require('./hierarchic-categories.template.html'),
        controller: HierarchicCategoriesController
    });
