import React, { useState } from 'react';

function Board(props) {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isx, setIsx] = useState(true);

  function handleClick(i) {

    if(squares[i] === null){
      if(isx){
        squares[i] = 'S';
      }
      else{
       squares[i] = 'O';
      }

      setSquares(squares);
      setIsx(!isx);
    }
  }

  function renderSquare(i) {
    return (
      <React.Fragment>
        <Square
        value={squares[i]}
        onClick={() => handleClick(i)} 
      />
      </React.Fragment>
    );
  }

  let status = 'Next player: ';
  status = isx === true ? status += 'S' : status += 'O';
  
  return (
    <React.Fragment>
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
      </div>
      <Game squares={squares}/>
      </React.Fragment>
  );
}

export default Board;

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

function Game(props) {

  const [result, setResult] = useState('');
  const squares = props.squares.slice();
  const indexes = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
  if(result === ''){
    indexes.forEach(element => {
      if( squares[element[0]] === 'S' && squares[element[1]] === 'S' && squares[element[2]] === 'S'){
        setResult('S Wins');          
      }
      else if( squares[element[0]] === 'O' && squares[element[1]] === 'O' && squares[element[2]] === 'O'){
        setResult('O Wins');
      }
    });
  }
    
  if((squares[0] === 'S' || squares[0] === 'O') && result === ''){
    let allnull = false;
    
    for (var i=0; i<squares.length; i++){
      if(squares[i] === null ){
        allnull = true;
        break;
      }
    }

    if(allnull === false && (result !== 'S Wins' || result !== 'O Wins')){
      setResult('Draw');
    }
  }
    
  return (
    <div>
    <h1>{result}</h1>
  </div>
  
  );
}
//Comment