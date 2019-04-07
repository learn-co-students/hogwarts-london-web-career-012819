import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Filters from './Filters'

class App extends Component {

  state = {
    hogs: hogs,
    showHogs: hogs,
    sortBy: null,
    greased: false
  }

  handleSelectChange = e => {
    this.setState({
        sortBy: e.target.value
    }, this.sortEm(e.target.value) )
  }

  handdleToggleGreased = () => {
    this.setState({
        greased: !this.state.greased
    }, () => this.setState({showHogs: this.greasedFilter()}) )
  }

  sortEm(sorter){
    const hoggies = this.greasedFilter()
    if(sorter === "name"){
      console.log("in")
      let showHogs = hoggies.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
      console.log(showHogs)
      this.setState({showHogs})
    }
    if(sorter === "weight"){
      console.log("in")
      let showHogs = hoggies.sort((a,b) => {
        const w = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        console.log(a,b)
        return a[w] - b[w]
      })
      console.log(showHogs)
      this.setState({showHogs})
    }
  }
 

  greasedFilter(){
    if (this.state.greased) {
      const showHogs = this.state.hogs.filter(hog => hog.greased)
      return showHogs
    } else {
      return hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filters handleSelectChange={this.handleSelectChange} handdleToggleGreased={this.handdleToggleGreased} greased={this.state.greased} />
          < HogContainer hogs={this.state.showHogs} />
      </div>
    )
  }
}

export default App;
