import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    return hash({
      link: this.store.findRecord('link', params.link_id)
    });

  },
});
