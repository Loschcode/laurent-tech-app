import DS from 'ember-data';

console.log("api or something");

export default DS.RESTAdapter.extend({
  namespace: window.FeedApp.api.namespace,
  host: window.FeedApp.api.host
});
