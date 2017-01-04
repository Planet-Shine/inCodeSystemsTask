
import imageGalleryModule from './image-gallery.module';

class ImageGalleryController {
    static $inject = ['$scope'];
    mainImage = null;
    images = null;
    constructor($scope) {
        $scope.$watch('$ctrl.images', (newValue) => {
            if (newValue && newValue[0]) {
                this.mainImage = newValue[0];
            }
        });
    }
    switchPhoto(delta) {
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
    }
    previousPhoto() {
        this.switchPhoto(-1);
    }
    nextPhoto() {
        this.switchPhoto(1);
    }
}

imageGalleryModule.component('imageGallery', {
    bindings: {
        'images': '<'
    },
    template: require('./image-gallery.template.html'),
    controller: ImageGalleryController
});
