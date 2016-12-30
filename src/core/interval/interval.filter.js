
export default (coreModule) => {
    coreModule.
        filter('interval', function () {
            return function (input, from = {}, to = {}) {
                return input.filter((item) => {
                    return Object.keys(from)
                        .every((key) => {
                            const value = parseInt(from[key], 10);

                            return item[key] >= value || isNaN(value);
                        }) &&
                        Object.keys(to)
                            .every((key) => {
                                const value = parseInt(to[key], 10);

                                return item[key] <= to[key] || isNaN(value);
                            });
                });
            };
        });
};
