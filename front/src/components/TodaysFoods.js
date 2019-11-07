import React, { Component } from 'react'

class TodaysFoods extends Component {
    state = {

    }

    inputSearch = (e) => {

        this.setState({
   
        })

    }

    render() {
        return (
            <div>
                <h3>Today's Foods</h3>
                <p>Total: {this.props.totalCalories}</p>
            </div>
        )
    }
}

 export default TodaysFoods;