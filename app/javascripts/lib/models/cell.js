TicTacToe.Models.Cell = Backbone.Model.extend({

  defaults: {
    value: ' '
  },
  
  setValue: function() {
    this.set({value: 'X'})
  }
});