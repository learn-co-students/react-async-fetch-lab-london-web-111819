// create your App component here
import React, { Component } from 'react'

const baseUrl = 'http://api.open-notify.org/astros.json'

class App extends Component {
    componentDidMount() {
        fetch(baseUrl).then(resp => console.log(resp))
    }
    
    render() {
        return (
            <div>
                lol
            </div>
        )
    }
}

export default App