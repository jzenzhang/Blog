export default {
  proxy: {
    '/app': {
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
      rewrite: path => path.replace(/^\//, '')
    }
  }
}