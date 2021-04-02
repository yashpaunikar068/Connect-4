import './App.css';
import React from "react";
import Row from './row.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        player1: 1,
        player2: 2,
        currentPlayer: null,
        board: [],
        gameOver: false,
        message: ''
      };
      
      this.play = this.play.bind(this);
    }

    generateBoard() {
      let board = [];
      for (let r = 0; r < 6; r++) {
        let row = [];
        for (let c = 0; c < 7; c++) { 
          row.push(null) 
        }
        board.push(row);
      }
      
      this.setState({
        board,
        currentPlayer: this.state.player1,
        gameOver: false,
        message: ''
      });
    }
    
    togglePlayer() {
      return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }
    
    play(c) {
      if (!this.state.gameOver) {
        let board = this.state.board;
        for (let r = 5; r >= 0; r--) {
          if (board[r][c] == null) {
            board[r][c] = this.state.currentPlayer;
            break;
          }
        }
  
        let result = this.result(board);
        if (result === this.state.player1) {
          this.setState({ board, gameOver: true, message: 'Player 1 wins!' });
          alert('Player 1 Wins!')
        } else if (result === this.state.player2) {
          this.setState({ board, gameOver: true, message: 'Player 2 wins!' });
          alert('Player 2 Wins!')
        } else {
          this.setState({ board, currentPlayer: this.togglePlayer() });
        }
      } 
    }
    
    vertical(board) {
      for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r - 1][c] &&
                board[r][c] === board[r - 2][c] &&
                board[r][c] === board[r - 3][c]) {
              return board[r][c];    
            }
          }
        }
      }
    }
    
    horizontal(board) {
      for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r][c + 1] && 
                board[r][c] === board[r][c + 2] &&
                board[r][c] === board[r][c + 3]) {
              return board[r][c];
            }
          }
        }
      }
    }

    diagonalRight(board) {
      for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r - 1][c + 1] &&
                board[r][c] === board[r - 2][c + 2] &&
                board[r][c] === board[r - 3][c + 3]) {
              return board[r][c];
            }
          }
        }
      }
    }
    
    diagonalLeft(board) {
      for (let r = 3; r < 6; r++) {
        for (let c = 3; c < 7; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r - 1][c - 1] &&
                board[r][c] === board[r - 2][c - 2] &&
                board[r][c] === board[r - 3][c - 3]) {
              return board[r][c];
            }
          }
        }
      }
    }
    
    result(board) {
      return this.vertical(board) || this.horizontal(board) || this.diagonalLeft(board) || this.diagonalRight(board);
    }
    
    
    render() {
      return (
        <div>
          <h2>Player 1 is RED and Player 2 is YELLOW</h2>
          <br/>     
          <table>
            <thead>
            </thead>
            <tbody>
              {this.state.board.map((row) => (<Row row={row} play={this.play} />))}
            </tbody>
          </table>
          <br/>

          <button className="button" onClick={() => {this.generateBoard()}}>Play Game</button>
          <br/>

          <p className="message">{this.state.message}</p>
        </div>
      );
    }
  }
  

  export default App;