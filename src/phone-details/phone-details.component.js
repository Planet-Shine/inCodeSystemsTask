
import phoneDetailsModule from './phone-details.module';

export default phoneDetailsModule
    .component('phoneDetails', {
        bindings: {
            phoneId: '<'
        },
        template: require('./phone-details.template.html'),
        controller: ['Phone', '$scope', 'PhoneClaimForm', function (Phone, $scope, PhoneClaimForm) {
            this.onPhoneIdChanges = (newValue) => {
                if (newValue) {
                    Phone.loadById(this.phoneId);

                    this.mainImage = Phone.mainImage;
                    this.phone = Phone.phone;
                }
            };

            const switchPhoto = (delta) => {
                const currentIndex = this.phone.images.indexOf(this.mainImage.src);
                const length = this.phone.images.length;
                if (~currentIndex) {
                    let index = currentIndex + delta;
                    if (index < 0) {
                        index = length - 1;
                    } else if (index === length) {
                        index = 0;
                    }
                    this.mainImage.src = this.phone.images[index];
                }
            };

            this.openClaimForm = (phoneId) => {
                PhoneClaimForm.open(phoneId);
            };

            this.previousPhoto = () => {
                switchPhoto(-1);
            };

            this.nextPhoto = () => {
                switchPhoto(1);
            };

            $scope.$watch("$ctrl.phoneId", this.onPhoneIdChanges);
        }]
    });
