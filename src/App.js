import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          ITX - REACT 
        </header>
        <div className="shopping-list">
          <h1>Shopping List</h1>
          <ul>
            <li>Refrescos</li>
            <li>Sabritas</li>
            <li>Chocolates</li>
          </ul>
          <div className='add-car'>
            <input /> 
            <button>
              Add to Car
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
