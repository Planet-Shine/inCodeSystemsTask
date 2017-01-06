
import './phone-claim-form.service';
import phoneDetailsModule from './phone-claim-form.module';

class PhoneClaimFormController {
    constructor(PhoneClaimForm, $scope, Phone, $timeout, Claim) {
        this.succeed = null;
        this.failed = null;
        this.user = null;
        this.closeTimeoutPromise = null;
        this.$submitted = null;
        this.phoneName = '';
        this.vkValidationRegExp = /(:?^(http:\/\/|https:\/\/)?(www\.)?vk\.com\/(\w|\d)+?\/?$)|(:?^$)/i;
        this.Claim = Claim;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.formState = PhoneClaimForm.formState;
        this.clear();
        $scope.$watch('$ctrl.formState.isOpened', (newValue) => {
            if (newValue) {
                this.clear();
                $timeout.cancel(this.closeTimeoutPromise);
            }
        });
        $scope.$watch('$ctrl.formState.phoneId', (newValue) => {
            if (newValue) {
                this.phoneName = (Phone.getItemById(newValue) || {}).name;
            }
        });
    }
    closeForm() {
        this.formState.isOpened = false;
    }
    onSubmit(isValid) {
        var data;

        this.$submitted = true;
        if (isValid) {
            data = Object.assign({}, this.user, {
                id: this.formState.phoneId
            });
            this.Claim.createClaim(data).then(() => {
                this.$scope.$apply(() => {
                    this.succeed = true;
                });
                this.closeTimeoutPromise = this.$timeout(() => {
                    this.clear();
                    this.closeForm();
                }, PhoneClaimFormController.MESSAGE_TIMEOUT);
            });
        }
    }
    clear() {
        this.$submitted = false;
        this.succeed = false;
        this.failed = false;
        this.user = {
            name: null,
            email: null,
            address: null,
            vkUrl: null
        };
    }

}

PhoneClaimFormController.$inject = ['PhoneClaimForm', '$scope', 'Phone', '$timeout', 'Claim'];
PhoneClaimFormController.MESSAGE_TIMEOUT = 3000;

export default phoneDetailsModule
    .component('phoneClaimForm', {
        template: require('./phone-claim-form.template.html'),
        controller: PhoneClaimFormController
    });
