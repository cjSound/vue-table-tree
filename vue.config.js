module.exports = {
    baseUrl: './',
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