import DS from "ember-data";

var Model = DS.Model.extend({
  color : DS.attr(),
  sound : DS.attr(),
  level : DS.belongsTo('level')
});

Model.reopenClass({
  FIXTURES : [
    {
      id : 1,
      color : 'green',
      level : 1
    },
    {
      id : 2,
      color : 'blue',
      level : 1
    },
    {
      id : 3,
      color : 'yellow',
      level : 1
    },
    {
      id : 4,
      color : 'red',
      level : 1
    },
    {
      id : 5,
      color : 'white',
      level : 1
    },
    {
      id : 6,
      color : 'grey',
      level : 1
    }
  ]
});

export default Model;
