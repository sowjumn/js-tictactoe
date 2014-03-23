TicTacToe.Models.Cell = Backbone.Model.extend({

  defaults: {
    value: 'Click'
  },
  
  setValue: function() {
    this.set({value: 'X'})
  }
});