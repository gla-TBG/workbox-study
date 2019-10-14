const CopyWebpackPlugin = require("copy-webpack-plugin"); // 复制文件插件

module.exports = {
    configureWebpack: config => {
        const plugins = [];
        plugins.push(
            // 复制 pwa 所需的文件到输出的地方
            new CopyWebpackPlugin([
                {
                    from: "workbox-sw.js",
                    to: "sw.js"
                }
            ])
        );
        config.plugins = [...config.plugins, ...plugins];
    }
}
