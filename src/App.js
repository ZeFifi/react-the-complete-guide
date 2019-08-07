import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./components/ValidationComponent/ValidationComponent";
import CharComponent from "./components/CharComponent/CharComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: ""
        }
    }

    counterHandler = (event) => {
        this.setState({counter : event.target.value});
    };

    deleteHandler = (index) => {
        const text = this.state.counter.split("");
        text.splice(index, 1);
        const updatedText = text.join("");
        this.setState({counter : updatedText})
    };

  render() {
      const charList = this.state.counter.split("").map((char, index) => {
          return <CharComponent click={() => this.deleteHandler(index)} character={char} key={index}/>
      });

    return (
        <div className="App">
          <input type="text" onChange={(event) => this.counterHandler(event)}/>
          <p>Nombre de caractères : {this.state.counter.length}</p>
            <ValidationComponent charLength={this.state.counter.length}/>
            {charList}
        </div>
    );
  }
}

export default App;
