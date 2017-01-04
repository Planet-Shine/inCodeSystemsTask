
import imageGalleryModule from './image-gallery.module';

imageGalleryModule.component('imageGallery', {
    bindings: {
        'images': '<'
    },
    template: require('./image-gallery.template.html'),
    controller: ['$scope', function ($scope) {

        const switchPhoto = (delta) => {
            const currentIndex = this.images.indexOf(this.mainImage);
            const length = this.images.length;
            if (~currentIndex) {
                let index = currentIndex + delta;
                if (index < 0) {
                    index = length - 1;
                } else if (index === length) {
                    index = 0;
                }
                this.mainImage = this.images[index];
            }
        };

        this.previousPhoto = () => {
            switchPhoto(-1);
        };

        this.nextPhoto = () => {
            switchPhoto(1);
        };

        $scope.$watch('$ctrl.images', (newValue) => {
            if (newValue && newValue[0]) {
                this.mainImage = newValue[0];
            }
        });
    }]
});
