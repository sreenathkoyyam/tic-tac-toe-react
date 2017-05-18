import React, { Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Square from './square';


class Board extends Component {
  constructor() {
    super();
    this.state = { 
      squares: Array(16).fill(null),
      xIsNext: true
    };
  }
    handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    squares[i] = (this.state.xIsNext ? 'X' : 'O');
    this.setState({
      squares: squares,
       xIsNext: !this.state.xIsNext
    
  });
  }
  renderSquare(i) {
    // calling Squire
       return <Square value={this.state.squares[i]}   onClick={() => this.handleClick(i)} />;
  }

  render() {
   // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div >
       
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
           {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
           {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
           {this.renderSquare(11)}
        </div>
         <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
           {this.renderSquare(15)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
     
      <div className="game"> 
         <h1>Learning React </h1>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2 , 3],
    [ 4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];

  for (let i = 0; i < lines.length; i++) {
   // console.log(`huu:` + lines.length)
const [a, b, c , d] = [...lines[i]];
  //console.log(`huu:` + squares[a]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]&& squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

//ReactDOM.render(
 // <Game />,
 // document.getElementById('root')
// );

export default Game;