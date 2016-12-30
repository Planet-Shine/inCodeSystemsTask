
export default (coreModule) => {
    coreModule.
        filter('categories', function () {
            return function (input, categories) {
                return input.filter(item => {
                    return categories
                        .every(category => {
                            return item[category.name] === category.value;
                        });
                });
            };
        });
};
