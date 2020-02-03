import React from 'react'
import Person from './Person'


class PeopleList extends React.Component {


render(){

 return (
   <ul>
       {this.props.people.map(person => <Person person={person} />)}
   </ul>
 )

}

}



export default PeopleList;