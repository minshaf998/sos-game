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
             
        if(this.state.isx){
        squares[i] = 'S';}

        else{
            squares[i] = 'O';
        }
        this.setState({squares: squares,isx: !this.state.isx });
        // console.log(this.state.squares)
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
        const status = 'Next player: X';
        //console.log(this.state.squares)
    
        return (
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
  
  game(){

    const squares = this.state.squares.slice();
     console.log(this.state.squares)

    if(squares[0] === 'S'){
      alert('You win')
    }


  }

  render() { 
    return <div></div>;
  }
}