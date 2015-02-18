import Ember from "ember";

export default Ember.Controller.extend({

  currentSequence : [],

  score : 100,

  validateSequence : function (id) {

    var validSequence = this.get('model.sequence'),
      currentSequence = this.get('currentSequence'),
      isValid = true,
      score = this.get('score'),
      i;

    Ember.Logger.debug('sequence info', validSequence, currentSequence);

    for (i = 0; i < validSequence.length; i++) {

      Ember.Logger.debug('validating', i, currentSequence[i], validSequence[i]);

      //correct so far (incomplete
      if ( i >= currentSequence.length) {
        return;
      }

      if (parseInt(currentSequence[i], 10) !== validSequence[i]) {
        // is incorrect
        isValid = false;
        break;
      }

    }

    if (!isValid) {
      this.set('currentSequence', []);
      this.set('score', score - 10);
    } else {
      ;//execute win!!
    }

  },

  actions : {

    buttonPress : function (button) {
      this.get('currentSequence').push(button.get('id'));
      this.validateSequence();
    }

  }

});
