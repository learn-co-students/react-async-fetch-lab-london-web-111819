// create your App component here
import React, { Component } from 'react'

class App extends Component{

    state = {
        peopleList:[]
    }

    updatePeopleList = (list) => {
        this.setState({
            peopleList: list
        })
    }

    render(){
        return(
            <div>
                <p>People in space </p>
                <ul>
                {this.state.peopleList.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }

    componentDidMount(){
        const url = 'http://api.open-notify.org/astros.json'
        fetch(url)
        .then(resp => resp.json())
        .then(data => this.updatePeopleList(data.people))
    }
}

export default App