var Game = {
  start: function() {
    var cell0 = new TicTacToe.Models.Cell();
    var cell1 = new TicTacToe.Models.Cell();
    var cell2 = new TicTacToe.Models.Cell();
    var cell3 = new TicTacToe.Models.Cell();
    var cell4 = new TicTacToe.Models.Cell();
    var cell5 = new TicTacToe.Models.Cell();
    var cell6 = new TicTacToe.Models.Cell();
    var cell7 = new TicTacToe.Models.Cell();

    var cells = [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7];

    var board = new TicTacToe.Collections.Board(cells);
    console.log(board.length);
    var boardView = new TicTacToe.Views.BoardView({collection: board});
    boardView.render();
    $('.main-container').html(boardView.el);
  }
}