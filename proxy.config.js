  //arquivo configuração para comunicar com backend porta 8080 manda endereço sem o /api
  const proxy = [
    {
      context: ['/api'],
      target: 'http://localhost:8080',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;   