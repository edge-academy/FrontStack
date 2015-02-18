import Ember from "ember";

export default Ember.Route.extend({

  model : function (params) {
    return {
      ad : { url : 'http://ads.example.com/1' },
      game : this.store.find('game', params.id)
    };
  }

});
