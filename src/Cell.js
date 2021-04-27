import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: props.colorVal
        }
        console.log(props.colorVal)
    }

    // state = {
    //     color: this.props.colorVal // default rn
    // }

    activateColor = () => {
        console.log('clicked me!')
        this.setState({
            color: '#333'
        })
        // return null
    }

    render() {
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.activateColor}></div>
    }
}