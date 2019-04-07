import React, {Component} from 'react'

export default class Filters extends Component {

    render(){
        return <div className="ui menu">
            <div className="item">
                <label>Sort By </label>
            </div>
            <div className="ui item">
                <select 
                    className="ui selection dropdown"
                    name="sort"
                    onChange={this.props.handleSelectChange}
                    value={this.props.sortBy}>
                    <option>Select</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
            <div className="item">
                <label>Greased Pigs Only?</label>
            </div>
            <div className="item">
                <input 
                    className="ui toggle checkbox"
                    checked={this.props.greased}
                    onChange={this.props.handdleToggleGreased}
                    type="checkbox"
                />
            </div>
        </div>
    }
}