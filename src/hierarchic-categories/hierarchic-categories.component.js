
import hierarchicCategoriesModule from './hierarchic-categories.module';

export default hierarchicCategoriesModule
    .component('hierarchicCategories', {
        template: require('./hierarchic-categories.template.html'),
        controller: ['Phone', function (Phone) {
            this.innerSelectedProp = null;
            this.filters = Phone.getCategoryFilters();
            this.onSubSelect = (treePoints) => {
                Phone.filters.categories = treePoints;
            };
            this.clear = () => {
                this.innerSelectedProp = null;
                Phone.filters.categories = [];
            };
        }]
    });
