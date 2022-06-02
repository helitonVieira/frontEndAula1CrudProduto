  //arquivo configuração para comunicar com backend porta 8080 manda endereço sem o /api
  const proxy = [
    {
      context: ['/api'],
      target: 'https://app-vsystem.herokuapp.com', 
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;   