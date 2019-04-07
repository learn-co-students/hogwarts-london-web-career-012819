import React, {Component} from 'react'
import HogDetails from './HogDetails'

export default class HogTile extends Component {

    state = {
        details: false
    }
    
    imageRender = name => {
        const imageName = name.split(" ").join("_").toLowerCase()
        const image = require(`../hog-imgs/${imageName}.jpg`)
        return image
    }
    render(){
        const {name, specialty} = this.props.hog
        return <div className="ui card eight wide column" onClick={() => this.setState( prevState => ({ details: !prevState.details}))} >
            <div className="image">
                <img src={this.imageRender(name)} />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <div className="description">Specialty: {specialty}</div>
            </div>
            {this.state.details ? <HogDetails hog={this.props.hog} /> : null}

        </div>
    }
}