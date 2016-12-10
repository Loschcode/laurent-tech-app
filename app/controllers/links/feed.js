import Ember from 'ember';
import ENV from 'feed-app/config/environment';

export default Ember.Controller.extend({
  actions: {
    /**
     * We refresh the links from the database by feeding on the back-end
     */
    refresh: function() {
      Ember.$.ajax({
        url: ENV.api.host + ENV.api.namespace + '/links/feed',
      });
    }
  }
});
