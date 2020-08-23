import React, { Component } from 'react';
// import './App.css';
import Contacts from './components/contacts';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      contacts: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
}

  render(){
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

  
}

export default App;
