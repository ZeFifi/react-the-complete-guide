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
            ],
            isVisible: false
        }
    }

    changeNamesHandler = () => {
        this.setState({
            people : [
                {
                    name: "Philip",
                    age: 31
                },
                {
                    name: "Sylvia",
                    age: 30
                }
            ]
        })
    };

    editNamesHandler = (event) => {
        this.setState({
            people : [
                {
                    name: event.target.value,
                    age: 31
                },
                {
                    name: "Sylvia",
                    age: 30
                }
            ]
        })
    };

    toggleNames = () => {
      this.setState({
          isVisible : !this.state.isVisible
      })
    };

  render() {
    return (
        <div className="App">
          <h1>Hello people!</h1>
            { this.state.isVisible ?
                <div className="people">
                <Person
                    name={this.state.people[0].name}
                    age={this.state.people[0].age}
                    click={this.changeNamesHandler}
                    edit={this.editNamesHandler}
                    placeholder={this.state.people[0].name}
                />
                <Person
                    name={this.state.people[1].name}
                    age={this.state.people[1].age}
                />
            </div> : null
            }
          <button onClick={this.changeNamesHandler}>Change names</button>
          <button onClick={this.toggleNames}>Make names visible</button>
        </div>
    );
  }
}

export default App;
