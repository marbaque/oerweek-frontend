import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';


const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('events', function () {
    this.route('event', {
      path: ':event_slug'
    });
  });

  this.route('resources', function () {
    this.route('resource', {
      path: ':resource_slug'
    });
  });

  this.route('page', {
    path: '/page/:page_slug'
  });

  this.route('not-found');

  this.route('submit', function () {
    this.route('general');
    this.route('event');
    this.route('preview');
    this.route('confirmation');
    this.route('resource');
    this.route('error');
  });
});

export default Router;
