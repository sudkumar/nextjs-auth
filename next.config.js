// load the environments
const { parsed: localEnv } = require("dotenv").config();
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
});
