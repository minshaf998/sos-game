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

    if(squares[0] === 'S'){
      console.log(squares);
      console.log('You win');
    }

    return <div></div>;
  }
}