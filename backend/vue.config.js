module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      proxy: 'https://www.sarpe.xyz',
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
  },
};
