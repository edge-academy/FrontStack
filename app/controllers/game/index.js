import Ember from "ember";

export default Ember.Controller.extend({

  needs : ['game'],

  data : Ember.computed.alias('controllers.game.model'),

  actions : {
    completeGame : function () {
      this.toggleProperty('data.isCompleted');
    }
  }

});
