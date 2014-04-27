export default DS.RESTAdapter.extend({
  host: window.ENV.apiUrl+'/api',
  headers: { 
    "Accept": "application/json, text/javascript; q=0.01"
  } 
});
