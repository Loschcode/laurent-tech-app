import ENV from 'feed-app/config/environment';
import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    /**
     * We refresh the links from the database by feeding on the back-end
     */
    refresh: function() {
      $.ajax({
        url: ENV.api.host + ENV.api.namespace + '/links/feed',
      });
    }
  }
});
