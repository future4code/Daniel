import React, { Component } from 'react'
import axios from "axios";

const apiToken = "0d9df3ca53dd0c469bd3d30469d5d1b8";
export default class DetalheUsuario extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: ""
        }
    }
    
    getUser = () => {
        const request = axios.get(
            `https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${this.props.id}`,
            {
              headers: {
                "api-token": apiToken
              }
            }
          );
          request
            .then(response => {
              this.setState({
                user: response.data.result
              });
            })
            .catch(error => {
              console.log(error);
            });
    }
    componentDidMount(){
        this.getUser();
    }
    render() {
        return (
            <div className="container">
                <h2>{this.state.user.name}</h2>
                <p>Email: {this.state.user.email}</p>
            </div>
        )
    }
}
