import React, {Component} from 'react';
import './App.css';
import Person from "./components/Person/Person";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people : [
                {
                    name: "Philippe",
                    age: 31
                },
                {
                    name: "Sylvie",
                    age: 30
                }
            ]
        }
    }

  render() {
    return (
        <div className="App">
          <h1>Hello people!</h1>
          <Person name={this.state.people[0].name} age={this.state.people[1].name} />
          <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        </div>
    );
  }
}

export default App;
