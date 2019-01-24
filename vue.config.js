module.exports = {
    publicPath: './',
    configureWebpack: {
        output: {
            library: "VueTableTree",
            libraryExport: 'default'
        },
    },
    css: {
        extract: false
    }
}