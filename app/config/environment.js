module.exports = function(environment) {
  var ENV = {
    rootURL: '/',
    FEATURES: {
      // Here you can enable experimental featuers on an ember canary build
      // e.g. 'with-controller': true
    },
    api: {
      protocol: 'http',
      port: '3000',
      host: 'localhost'
    }
  };

  if (environment === 'development') {
  }

  if (environment === 'production') {
    ENV.production = true;
    ENV.api.host = 'playdoh.herokuapp.com';
    ENV.api.port = '80';
  }

  ENV.apiUrl = ENV.api.protocol + '://' + ENV.api.host + (ENV.api.port ? ':' + ENV.api.port : '');

  return JSON.stringify(ENV); // Set in index.html
};
