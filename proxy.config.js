  //arquivo configuração para comunicar com backend porta 8080 manda endereço sem o /api
  //no package.json no script deve ficar desta forma (ng server --proxy-config proxy.config.js"),
  const PROXY_CONFIG = [
    {
      context: ['/api'], // caminho que  começa com /api adicionar o target antes 
      target: 'http://localhost:8090',
      secure: true, // se usar https tem que colocar true
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}//retirar para enviar
    }
  ];

  module.exports = PROXY_CONFIG;   