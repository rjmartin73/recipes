import React, { Component } from 'react';
import './App.css';

// components
// api key: e45ae5d3784bf0a04da28ddaa0f17e3b
import Form from "./components/Form"
const API_KEY = 'e45ae5d3784bf0a04da28ddaa0f17e3b';


class App extends Component {
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();    
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`); 
   const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;