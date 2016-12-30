
export default (corePhoneModule) => {
    corePhoneModule.
        factory('Phone', ['$resource',
            function ($resource) {
                return {
                    phones: [],
                    phone: {},
                    filters: {
                        searchQuery: {
                            name: ''
                        },
                        priceFrom: {
                            price: ''
                        },
                        priceTo: {
                            price: ''
                        },
                        categories: []
                    },
                    getCategoryFilters: function () {
                        // todo : Убрать в отдельный модуль.
                        const prestigeType = {
                                Elite: {
                                    prop: {
                                        value: 'elite',
                                        name: 'prestigeType'
                                    },
                                    sub: null
                                },
                                Optimal: {
                                    prop: {
                                        value: 'optimal',
                                        name: 'prestigeType'
                                    },
                                    sub: null
                                },
                                Flagman: {
                                    prop: {
                                        value: 'flagman',
                                        name: 'prestigeType'
                                    },
                                    sub: null
                                }
                            },
                            screens = {
                                'Touch screen': {
                                    prop: {
                                        name: 'touchScreen',
                                        value: true
                                    },
                                    sub: prestigeType
                                },
                                'LCD screen': {
                                    prop: {
                                        name: 'touchScreen',
                                        value: false
                                    },
                                    sub: prestigeType
                                }
                            },
                            firms = {
                                'Samsung': {
                                    prop: {
                                        name: 'firm',
                                        value: 'samsung'
                                    },
                                    sub: screens
                                },
                                'Motorola': {
                                    prop: {
                                        name: 'firm',
                                        value: 'motorola'
                                    },
                                    sub: screens
                                },
                                'Dell': {
                                    prop: {
                                        name: 'firm',
                                        value: 'dell'
                                    },
                                    sub: screens
                                },
                                'T-Mobile': {
                                    prop: {
                                        name: 'firm',
                                        value: 't-mobile'
                                    },
                                    sub: screens
                                },
                                'Kyocera': {
                                    prop: {
                                        name: 'firm',
                                        value: 'kyocera'
                                    },
                                    sub: screens
                                },
                                'LG': {
                                    prop: {
                                        name: 'firm',
                                        value: 'lg'
                                    },
                                    sub: screens
                                }
                            };

                        return firms;
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

