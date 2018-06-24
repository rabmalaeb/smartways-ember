import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' }, function() {
    this.route('about', { path: '/about-us' });
    this.route('services', { path: '/services' });
    this.route('work-with-us', { path: '/work-with-us' });
    this.route('contact-us', { path: '/contact-us' });
  });
});

export default Router;
