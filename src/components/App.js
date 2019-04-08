import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigpen from './Pigpen.js'

const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const MEDAL = 'highest medal achieved'

class App extends Component {
  state = {
    hogs: hogs,
    greased: false,
    sortValue: "default"
  }

  handleSortChange = (event) => {
    this.setState({
      sortValue: event.target.value
    })
  }

  sortHogs = (hogs) => {
    switch (this.state.sortValue){
      case "default":
        return hogs
        break;
      case "name":
        return hogs.sort((a,b) => {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0
        })
        break;
      case "weight":
        return hogs.sort((a,b) => {
          return a[WEIGHT] - b[WEIGHT]
        })
        break;
    }
  }

  filterHogs = (hogs) => {
    if (this.state.greased) {
      return hogs.filter(hog => hog.greased)
    } else {
      return [...hogs]
    }
  }

  handleCheck = (event) => {
    this.setState({
      greased: event.target.checked
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Nav handleSortChange={this.handleSortChange} handleCheck={this.handleCheck} greased={this.state.greased}/>
          <Pigpen hogs={this.filterHogs(this.sortHogs(this.state.hogs))} />
      </div>
    )
  }
}

export default App;
