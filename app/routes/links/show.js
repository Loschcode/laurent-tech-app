import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      link: this.store.findRecord('link', params.link_id)
    });

  },
});
