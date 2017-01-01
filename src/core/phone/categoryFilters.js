
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

export default firms;
