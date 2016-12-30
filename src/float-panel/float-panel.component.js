
import floatPanelModule from './float-panel.model';

export default floatPanelModule.component('floatPanel', {
    template: require('./float-panel.template.html'),
    controller: ['Phone', function (Phone) {
        this.filters = Phone.filters;
    }]
});
