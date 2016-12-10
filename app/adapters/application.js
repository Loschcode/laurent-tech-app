import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: window.FeedApp.api.namespace,
  host: window.FeedApp.api.host
});
