var Game = {
  start: function() {
    var cell0 = new TicTacToe.Models.Cell();
    var cell1 = new TicTacToe.Models.Cell();
    var cell2 = new TicTacToe.Models.Cell();
    var row0 = new TicTacToe.Collections.Row([cell0,cell1,cell2]);

    var cell3 = new TicTacToe.Models.Cell();
    var cell4 = new TicTacToe.Models.Cell();
    var cell5 = new TicTacToe.Models.Cell();
    var row1 = new TicTacToe.Collections.Row([cell3,cell4,cell5]);
    
    var cell6 = new TicTacToe.Models.Cell();
    var cell7 = new TicTacToe.Models.Cell();
    var cell8 = new TicTacToe.Models.Cell();
    var row2 = new TicTacToe.Collections.Row([cell6,cell7,cell8]);

    var rows = [row0,row1,row2];
    
    var boardView = new TicTacToe.Views.BoardView({collection: rows});
    boardView.render();
    $('.main-container').html(boardView.el);
  }
}