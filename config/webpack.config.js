const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
  const {env} = envVars;
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
