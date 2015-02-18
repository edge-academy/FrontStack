export default {
  name : "load-fixtures",
  after : "store",
  initialize : function (container) {
    var store = container.lookup('store:main');
    store.findAll('game');
    store.findAll('level');
    store.findAll('button');
  }
}
