import React from 'react'
import PeopleList from './Components/PeopleList'

class App extends React.Component {

    state = {
        people: []
    }

  render(){

   return (
     <div>
         < PeopleList people={this.state.people}/>
     </div>
   )

  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.people
        })
      })
  }

}



export default App;
