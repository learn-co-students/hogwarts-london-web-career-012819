import React, {Component} from 'react'
import HogTile from './HogTile';

export default class HogContainer extends Component {


    render(){
        return <div className="ui grid container">
            {this.props.hogs.map(hog => <HogTile hog={hog}/>)}
        </div>
    }
}