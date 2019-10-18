import React, { Component } from 'react'
import CreatePlaylist from './CreatePlaylist'
import ShowPlaylist from './ShowPlaylist'

export default class Home extends Component {
    render() {
        return (
            <div>
                <CreatePlaylist/>
                <ShowPlaylist/>
            </div>
        )
    }
}
