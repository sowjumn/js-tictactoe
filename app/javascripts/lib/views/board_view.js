TicTacToe.Views.BoardView = Backbone.View.extend({
  tagName: 'main-container',
  
  render: function() {
    this.collection.forEach(this.addOne, this)
  },

  addOne: function(cell) {
    var cellView = new TicTacToe.Views.CellView({model: cell});
    this.$el.append(cellView.render().el);
  }
});