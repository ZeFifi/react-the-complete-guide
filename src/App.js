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
                },
                {
                    name: "Hervé",
                    age: 31
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
      let cards = null;
      if(this.state.isVisible) {
           cards = (
              <div className="people">
                  {
                      this.state.people.map((person, index) => {
                      return <Person key={index}
                          name={person.name}
                          age={person.age}
                          click={this.changeNamesHandler}
                          edit={this.editNamesHandler}
                          placeholder={person.name}
                      />
                  })
                  }
              </div>
          )
      }
    return (
        <div className="App">
          <h1>Hello people!</h1>
            {cards}
            <button onClick={this.changeNamesHandler}>Change names</button>
            <button onClick={this.toggleNames}>Make names visible</button>
        </div>
    );
  }
}

export default App;
