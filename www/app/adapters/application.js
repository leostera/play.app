export default DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:3000/api',
  headers: { 
    "Accept": "application/json, text/javascript; q=0.01"
  } 
});
