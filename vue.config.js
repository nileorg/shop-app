module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/shop-app/'
        : '/',
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    }
}