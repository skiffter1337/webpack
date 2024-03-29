import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {Configuration} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({template: options.paths.html})]

    if (isDev) {
        plugins.push(isDev && new webpack.ProgressPlugin())
    }
    if (isProd) {
        plugins.push(isProd && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
        )
    }

    return plugins

}
