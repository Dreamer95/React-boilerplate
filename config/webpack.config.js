const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
    const {env} = envVars;
    // eslint-disable-line global-require
    const envConfig = require(`./webpack.${env}.js`);

    return merge(commonConfig, envConfig);
};
