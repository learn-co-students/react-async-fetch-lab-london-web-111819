// create your App component here
import React from 'react'

export default class App extends React.Component {

    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(output => console.log(output))
    }

    render() {
        return(
            <div>
                <h1>App component</h1>
            </div>
        )
    }
}