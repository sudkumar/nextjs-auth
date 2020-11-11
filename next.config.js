// load the environments
const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
};
