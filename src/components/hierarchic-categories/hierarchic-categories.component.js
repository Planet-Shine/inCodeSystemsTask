
import hierarchicCategoriesModule from './hierarchic-categories.module';

class HierarchicCategoriesController {
    static $inject = ['Phone'];
    Phone = null;
    innerSelectedProp = null;
    filters = null;
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


export default hierarchicCategoriesModule
    .component('hierarchicCategories', {
        template: require('./hierarchic-categories.template.html'),
        controller: HierarchicCategoriesController
    });
