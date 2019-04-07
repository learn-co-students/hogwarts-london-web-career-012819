import React, {Component} from 'react'

export default class HogDetails extends Component {


    render(){
        const {greased} = this.props.hog
        const medal = this.props.hog['highest medal achieved']
        const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        return (<div className="description">
            <strong>{greased ? "Greased" : "Not Greased"}</strong>
            <p>Highest medal acheived: <strong>{medal}</strong></p>
            <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: <strong>{weight}</strong></p>
        </div>)
    }
}
