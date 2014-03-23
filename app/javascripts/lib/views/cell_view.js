TicTacToe.Views.CellView = Backbone.View.extend({
  className: 'cell',

  initialize: function() {
    this.model.on('change', this.render, this)
  },

  events: {
    'click': 'addValue'
  },

  render: function() {
    this.$el.html(this.model.get('value'));
    return this
  },

  addValue: function(e) {
    e.stopPropagation();
    this.model.setValue();
  }
  
});