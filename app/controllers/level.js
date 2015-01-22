import Ember from "ember";

export default Ember.Controller.extend({

  actions : {

    buttonPress : function (button) {
      Ember.Logger.debug('Button Press!', button);
    }

  }

});
