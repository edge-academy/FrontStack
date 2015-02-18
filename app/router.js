import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('login');

  /**
   * This generates the following URLS
   *
   * /game/1
   * /game/1/index
   * /game/1/win
   * /game/1/level/1
   * /game/1/success/1
   *
   */
  this.resource('game', { path : 'game/:id' }, function () {

    this.route('win'); // game/1/win
    this.route('level', { path : 'level/:id' }); //  game/1/level/1
    this.route('success', { path : 'success/:id' });

  });

  this.route('create');

});

export default Router;
