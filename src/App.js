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

    toggleNames = () => {
      this.setState({
          isVisible : !this.state.isVisible
      })
    };

    deleteHandler = (index) => {
        const person = [...this.state.people];
        person.splice(index, 1)
        this.setState({people: person})
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
                          click={() => this.deleteHandler(index)}
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
            <button onClick={this.toggleNames}>Make names visible</button>
        </div>
    );
  }
}

export default App;
