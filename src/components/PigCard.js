import React from 'react'

const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const MEDAL = 'highest medal achieved'

class PigCard extends React.Component {

  state = {
    toggle: false
  }

  getPigImageUrl = () => {
        const underscoredPigName = this.props.name.split(' ').join('_').toLowerCase()
        const imagePath = `./hog-imgs/${underscoredPigName}.jpg`
        return imagePath
    }

    handleClick = () => {
      this.setState({
        toggle: !this.state.toggle
      })
    }


  render(){
    return (
      <div onClick={this.handleClick} className="ui eight wide column">
        <h1>{this.props.name}</h1>
        <img src={this.getPigImageUrl()} alt="hog"/>
        {this.state.toggle ? this.Description(): null}
      </div>
    )
  }

  Description() {
    return(
      <div>
        <small>
          <p>Specialty: {this.props.specialty}</p>
          <p>Weight: {this.props[WEIGHT]}</p>
          <p>Medal: {this.props[MEDAL]}</p>
        </small>
      </div>
    )
  }
}

export default PigCard
