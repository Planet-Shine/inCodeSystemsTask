
import floatPanelModule from './float-panel.model';

class FloatPanelController {
    constructor(Phone) {
        this.filters = Phone.filters;
    }
}
FloatPanelController.$inject = ['Phone'];

export default floatPanelModule.component('floatPanel', {
    template: require('./float-panel.template.html'),
    controller: FloatPanelController
});
