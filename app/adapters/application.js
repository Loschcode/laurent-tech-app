import DS from 'ember-data';
import ENV from 'feed-app/config/environment';

export default DS.RESTAdapter.extend({
  namespace: ENV.api.namespace,
  host: ENV.api.host
});
