import React, { Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import Board from './board';


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



// ========================================

//ReactDOM.render(
 // <Game />,
 // document.getElementById('root')
// );

export default Game;