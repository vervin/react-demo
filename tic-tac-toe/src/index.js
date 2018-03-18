  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';

  class Square extends React.Component {
    constructor(){
      super();
      console.log(this)
      this.state = {
        value: null,
      };
    }
    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value = {i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          <ShoppingList name="Mark"/>
        </div>
      );
    }
  }
  
  class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  
  // 通过这种标签语法来使用我们上面声明的组件: <ShoppingList name="Mark" />
  // ========================================
  
  ReactDOM.render(
    <Game />,
    // <shoppingList />,
    document.getElementById('root')
  );
  