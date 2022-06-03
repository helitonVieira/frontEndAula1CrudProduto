  //arquivo configuração para comunicar com backend porta 8080 manda endereço sem o /api
  const PROXY_CONFIG = [
    {
      context: ['/api'], // caminho que  começa com /api adicionar o target antes 
      target: 'http://app-vsystem.herokuapp.com/',
      secure: true, // se usar https tem que colocar true
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}//retirar para enviar
    }
  ];

  module.exports = PROXY_CONFIG;   