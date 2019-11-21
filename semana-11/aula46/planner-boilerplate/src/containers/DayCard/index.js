import React, { Component } from 'react'
import { connect } from 'react-redux';

class DayCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h3>Day</h3>
                <ul>
                    <li>Teste</li>
                </ul>
            </div>
        )
    }
}
export default connect()(DayCard);