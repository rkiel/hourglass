const Helper = require('webpack-config-helper');

function buildConfig(config) {
  config
    .entryAndCommonsChunk('vendor')
    .addRuleForBabel()
    .addHtmlWebpackPlugin()
    //    .addRuleForExtractCss()
    .echo();
}

module.exports = Helper.use(buildConfig);
