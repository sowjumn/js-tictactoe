TicTacToe.Views.CellView = Backbone.View.extend({
  className: 'cell',

  render: function() {
    this.$el.html('<div>Hello</div>');
    return this;
  }
  
});