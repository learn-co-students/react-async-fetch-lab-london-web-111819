import React from 'react'


class Person extends React.Component {


render(){

 return (
   <li>
       {this.props.person.name}
   </li>
 )

}

}



export default Person;