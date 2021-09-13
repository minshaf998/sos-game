import React from 'react';

export default class Board extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        isx: true  
      };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();

    if(this.state.squares[i] === null){
      if(this.state.isx){
        squares[i] = 'S';}
    
        else{
            squares[i] = 'O';
        }

        this.setState({squares: squares,isx: !this.state.isx });
      }
    }

  
  renderSquare(i) {
    return (
      <React.Fragment>

        <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} 
      />          
      
      </React.Fragment>
    );
  }

        
  render() {
    let status = 'Next player: ';

    status = this.state.isx === true ? status += 'S' : status += 'O';

    return (
      <React.Fragment>
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
      <Game squares={this.state.squares}/>
      </React.Fragment>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Game extends React.Component {

  render() {
    const squares = this.props.squares.slice();
    const indexes = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let result = "";

    indexes.forEach(element => {
      if( squares[element[0]] === 'S' && squares[element[1]] === 'S' && squares[element[2]] === 'S' && result !== 'O Wins'){
        result = 'S Wins';
        
      }
      else if( squares[element[0]] === 'O' && squares[element[1]] === 'O' && squares[element[2]] === 'O' && result !== 'S Wins'){
        result = 'O Wins';
      }
    });

    if((squares[0] === 'S' || squares[0] === 'O') && result === ''){
      let allnull = false;

      for (var i=0; i<squares.length; i++){
        if(squares[i] === null ){
          allnull = true;
          break;
        }
      }
      if(allnull === false && (result !== 'S Wins' || result !== 'O Wins')){
        result = 'Draw';
      }
    }


    return <div><h1>{result}</h1></div>;
  }
}