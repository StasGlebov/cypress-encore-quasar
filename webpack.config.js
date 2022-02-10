const Encore = require('@symfony/webpack-encore');
const path = require('path');

Encore
    .setOutputPath('public/build')
    .setPublicPath('/build')
    .enableSassLoader(function(options) {
        options.additionalData = (content, loaderContext) => {
            if (loaderContext.resourcePath.endsWith('scss/global.scss')) {
                return content
            }

            return `@import "${path.resolve('/', './src/scss/global.scss')}";` + content
        }
    },
{
            resolveUrlLoader: true
        }
    )
// ... and so on

const config =  Encore.getWebpackConfig()

module.exports = {
    default: config,
    Encore
}
