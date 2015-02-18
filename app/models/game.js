import DS from "ember-data";

var Game = DS.Model.extend({

  currentLevel : DS.belongsTo('level'),
  isCompleted : DS.attr('boolean', { defaultValue : false }),
  levels : DS.hasMany('level'),
  opponent : DS.attr(),
  opponentScore : DS.attr('number'),
  score : DS.attr('number')

});

Game.reopenClass({
  FIXTURES : [
    {
      id : 1,
      opponent : 'runspired',
      levels : [1, 2, 3, 4, 5],
      score : 0,
      currentLevel : 1,
      isCompleted : false
    }
  ]
});

export default Game;
