import React from 'react';

class Variable extends React.Component {
constructor (){

super();
// default state
this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      };
      
   }



   render() {
     
      return (
          //parsing data by calling arrow function
         <div> 
            <Header/>
                <table  >
               <tbody>
                   
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
            <Content/>
         </div>
      );
   }



}




class Header extends React.Component {
   render() {

      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class Content extends React.Component {
   render() {
         //variable in ES6
       let i = 1;
       //style 
       let myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
           <h2>Content</h2>
            <p>This is the Menu Content!!!</p> 
            <a href="/courses" > courses</a>
             <p data-myattribute = "somevalue">This is the content!!!</p>
             <div>{1 + 1}</div>
             <div>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
            
             <h1 style = {myStyle}>Header</h1>
         </div>
         </div>
      );
   }
}

export default Variable;