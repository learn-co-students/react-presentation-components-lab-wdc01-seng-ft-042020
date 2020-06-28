import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }

    changeMood = () => {
        console.log(this.state)
        let mood 
        if (this.state.mood === "happy"){
            mood = "sad"
        } else {
            mood = "happy"
        }

      

        this.setState({
            mood: mood
        })
    }

    render(){
        return(
            <div onClick={this.changeMood}>
                {this.state.mood}
            </div>
        )
    }
}
export default SimpleComponent