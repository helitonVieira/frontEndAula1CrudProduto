  //arquivo configuração para comunicar com backend porta 8080 manda endereço sem o /api
  const proxy = [
    {
      context: ['/api'],
      target: 'https://app-vsystem.herokuapp.com',  //'http://localhost:8090',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;   