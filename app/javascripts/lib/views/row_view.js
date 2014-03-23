TicTacToe.Views.RowView = Backbone.View.extend({
  className: 'row',

  render: function() {
    this.collection.forEach(this.addOne,this);
    return this;
  },

  addOne: function(cell) {
    var cellView = new TicTacToe.Views.CellView({model: cell});
    this.$el.append(cellView.render().el);
  }
});