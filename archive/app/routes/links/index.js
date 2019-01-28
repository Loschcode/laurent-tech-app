import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      links: this.store.findAll('link', { reload: true }),
    });
  },
});
