import DS from "ember-data";

var Model = DS.Model.extend({
  buttons : DS.hasMany('button', { async: true }),
  sequence : DS.attr(),
  currentScore : DS.attr('number', { defaultValue : 100 })
});

Model.reopenClass({
  FIXTURES : [
    {
      id : 1,
      buttons : [1, 2, 3, 4, 5, 6],
      sequence : [3, 5, 6],
      currentScore : 100
    },
    {
      id : 2,
      buttons : [1, 2, 3, 4, 5, 6],
      sequence : [3, 5, 6],
      currentScore : 100
    },
    {
      id : 3,
      buttons : [1, 2, 3, 4, 5, 6],
      sequence : [3, 5, 6],
      currentScore : 100
    },
    {
      id : 4,
      buttons : [1, 2, 3, 4, 5, 6],
      sequence : [3, 5, 6],
      currentScore : 100
    },
    {
      id : 5,
      buttons : [1, 2, 3, 4, 5, 6],
      sequence : [3, 5, 6],
      currentScore : 100
    }
  ]
});

export default Model;
