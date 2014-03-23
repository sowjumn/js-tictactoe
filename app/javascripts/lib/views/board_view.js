TicTacToe.Views.BoardView = Backbone.View.extend({
  className: 'board',

  render: function() {
    this.collection.forEach(this.addOne, this)
  },

  addOne: function(row) {
    var rowView = new TicTacToe.Views.RowView({collection: row});
    this.$el.append(rowView.render().el);
  }
});