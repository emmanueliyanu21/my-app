import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
// import Team from './Team'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 38, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 40, belt: 'Green', id: 2 },
      { name: 'Andy', age: 25, belt: 'Grey', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];

    this.setState({
      //ninjas: this.ninjas.push(ninja)
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter
    //console.log(id)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        {/* <Team team={this.state.team} /> */}
        <AddNinja ola={this.addNinja} />

      </div>
    );
  }
}

export default App;
