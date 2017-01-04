
import floatPanelModule from './float-panel.model';

class FloatPanelController {
    filters = null;
    static $inject = ['Phone'];
    constructor(Phone) {
        this.filters = Phone.filters;
    }
}

export default floatPanelModule.component('floatPanel', {
    template: require('./float-panel.template.html'),
    controller: FloatPanelController
});
