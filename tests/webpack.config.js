const _Encore = require('@symfony/webpack-encore');
_Encore.configureRuntimeEnvironment('dev-server');

const { Encore } = require('../webpack.config');

Encore.configureManifestPlugin(() => ({
    enabled: false
}));

const config = Encore.getWebpackConfig();

// remove warning overlay. webpack v5 + quasar v1 incompatibility
config.devServer = {
    client: {
        overlay: false
    }
};

// remove AssetsPlugin
const plugins = config.plugins;
plugins.splice(-1, 1);

module.exports = {
    ...config,
    plugins
}
