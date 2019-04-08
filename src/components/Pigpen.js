import React, { Component } from 'react'
import PigCard from './PigCard.js'

class Pigpen extends Component {

  Piggies() {
    return this.props.hogs.map((hog, index) => {
      return <PigCard {...hog} key={index}/>
    })
  }

  render() {
    return (
      <div className="ui grid container">
          {this.Piggies()}
      </div>
    )
  }

}

export default Pigpen
