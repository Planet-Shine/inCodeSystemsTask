
import './phone-claim-form.service';
import phoneDetailsModule from './phone-claim-form.module';

export default phoneDetailsModule
    .component('phoneClaimForm', {
        template: require('./phone-claim-form.template.html'),
        controller: ['PhoneClaimForm', '$scope', 'Phone', '$timeout', 'Claim', function (PhoneClaimForm, $scope, Phone, $timeout, Claim) {
            const MESSAGE_TIMEOUT = 3000;
            var closeTimeoutPromise;

            this.formState = PhoneClaimForm.formState;
            this.phoneName = '';
            this.vkValidationRegExp = /(:?^(http:\/\/|https:\/\/)?(www\.)?vk\.com\/(\w|\d)+?\/?$)|(:?^$)/i;
            this.closeForm = () => {
                this.formState.isOpened = false;
            };
            this.onSubmit = (isValid) => {
                var data;

                this.$submitted = true;
                if (isValid) {
                    data = Object.assign({}, this.user, {
                        id: this.formState.phoneId
                    });
                    Claim.createClaim(data).then(() => {
                        $scope.$apply(() => {
                            this.succeed = true;
                        });
                        closeTimeoutPromise = $timeout(() => {
                            this.clear();
                            this.closeForm();
                        }, MESSAGE_TIMEOUT);
                    });
                }
            };
            this.clear = () => {
                this.$submitted = false;
                this.succeed = false;
                this.failed = false;
                this.user = {
                    name: null,
                    email: null,
                    address: null,
                    vkUrl: null
                };
            };
            this.clear();
            $scope.$watch('$ctrl.formState.isOpened', (newValue) => {
                if (newValue) {
                    this.clear();
                    $timeout.cancel(closeTimeoutPromise);
                }
            });
            $scope.$watch('$ctrl.formState.phoneId', (newValue) => {
                if (newValue) {
                    this.phoneName = (Phone.getItemById(newValue) || {}).name;
                }
            });
        }]
    });
