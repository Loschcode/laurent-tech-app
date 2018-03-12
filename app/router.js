import config from './config/environment';
import EmberRouter from '@ember/routing/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('links/feed');
  this.route('links', function() {
    this.route('show', {path: '/:link_id'});
  });
  this.route('career');
});

export default Router;
