import React, { Component } from 'react';
import './App.css';
import Lenders from './components/lenders';
import Borrowers from './components/borrowers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lenders: [],
      borrowers: []
    } 
    
    this.loadLenders = this.loadLenders.bind(this);
    this.loadBorrowers = this.loadBorrowers.bind(this);
    this.loadLenders();
    this.loadBorrowers();
  }

  loadLenders() {
    fetch('http://localhost:3001/lenders')
      .then(res => res.json())
      .then((data) => {
        this.setState({ lenders: data })
      })
      .catch(console.log)
  }

  loadBorrowers() {
    fetch('http://localhost:3001/borrowers')
      .then(res => res.json())
      .then((data) => {
        this.setState({ borrowers: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <Lenders lenders={this.state.lenders} />
        <Borrowers borrowers={this.state.borrowers} />
      </div>
    );
  }


}

export default App;
