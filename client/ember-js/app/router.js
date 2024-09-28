import EmberRouter from '@ember/routing/router';
import config from 'ember-js/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users', { path: '/home' });
  this.route('request-page', { path: '/request' });
  this.route('login', { path: '/login' });
  this.route('registration', { path: '/registration' });
});
