const config = require('./pluginConfig');
const { cosmiconfigSync } = require('cosmiconfig');

module.exports = () => {
    // Search for user config
    const userConfig = cosmiconfigSync(config.name, {
        searchPlaces: [`${config.name}.json`, `${config.name}.js`, `${config.name}.config.js`],
    }).search();

    // If we find user config, let's use it
    if (userConfig) {
        return userConfig.config;
    }

    // Let the user know we didn't find their config
    console.log(`❕ Couldn't find ${config.niceName} config.`);
};
