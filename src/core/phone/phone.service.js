
export default (corePhoneModule) => {
    corePhoneModule.
        factory('Phone', ['$resource',
            function ($resource) {
                return {
                    phones: [],
                    phone: {},
                    mainImage: {
                        src: ''
                    },
                    loadAll: function () {
                        this.phones = $resource('phones/:phoneId.json', {}, {
                            query: {
                                method: 'GET',
                                params: { phoneId: 'phones' },
                                isArray: true
                            }
                        }).query();
                    },
                    loadById: function (phoneId) {
                        this.phone = $resource('phones/:phoneId.json', {}, {
                            query: {
                                method: 'GET',
                                params: { phoneId: 'phones' },
                                isArray: true
                            }
                        }).get({ phoneId: phoneId }, (phone) => {
                            this.mainImage.src = phone.images[0];
                        });
                        // console.log(Restangular.one('phones').get().$object);
                        // Object.assign(this.phone);
                    }
                };
            }
        ]);
};

