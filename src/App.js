import React, {Component} from 'react';
import './App.css';
import Person from "./components/Person/Person";

class App extends Component {

  render() {
    return (
        <div className="App">
          <h1>Hello people!</h1>
          <Person name="Philippe" age="31"/>
          <Person name="Sylvie" age="30"/>
        </div>
    );
  }
}

export default App;
