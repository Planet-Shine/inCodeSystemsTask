
export default (corePhoneModule) => {
    corePhoneModule.
        factory('Phone', ['$resource',
            function ($resource) {
                return {
                    phones: [],
                    phone: {},
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
                        }).get({ phoneId: phoneId });
                    },
                    getItemById: function (phoneId) {
                        return this.phones
                            .concat([this.phone])
                            .find(phone => phone.id === phoneId);
                    }
                };
            }
        ]);
};

