import React, {Component} from 'react';
import './App.css';
import Person from "../../components/Persons/Person/Person"
import Persons from "../../components/Persons/Persons";
import Cockpit from "../../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people : [
                {
                    id: 1,
                    name: "Philippe",
                    age: 31
                },
                {
                    id: 2,
                    name: "Sylvie",
                    age: 30
                },
                {
                    id: 3,
                    name: "Hervé",
                    age: 31
                }
            ],
            isVisible: false
        }
    }

    editNamesHandler = (event, id) => {
        // We get the ID of the person when typing in the input
        const personIndex = this.state.people.findIndex(person => {
            return person.id === id;
        });

        // We create an object "person" at this specific index
        const person = {
            ...this.state.people[personIndex]
        };

        // We set a new person.name depending on what's typed in the input
        person.name = event.target.value;

        // We copy the original array
        const people = [...this.state.people];

        // This specific person becomes the new person
        people[personIndex] = person;

        // The state is updated
        this.setState({people: people})
    };

    toggleNames = () => {
      this.setState({
          isVisible : !this.state.isVisible
      })
    };

    deleteHandler = (index) => {
        const person = [...this.state.people];
        person.splice(index, 1);
        this.setState({people: person})
    };

  render() {
      let cards = null;
      if(this.state.isVisible) {
           cards = (
              <div className="people">
                  <Persons people={this.state.people} click={this.deleteHandler} edit={this.editNamesHandler}/>
              </div>
          )
      }
    return (
        <div className="App">
            <Cockpit toggle={this.toggleNames}/>
            {cards}
        </div>
    );
  }
}

export default App;
