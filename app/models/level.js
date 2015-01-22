import DS from "ember-data";

var Model = DS.Model.extend({
  buttons : DS.hasMany('button', { async: true }),
  sequence : DS.attr()
});

Model.reopenClass({
  FIXTURES : [
    {
      id : 1,
      buttons : [1, 2, 3, 4, 5, 6],
      sequence : [3, 5, 7]
    }
  ]
});

export default Model;
