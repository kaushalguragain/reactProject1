import React, { Component } from 'react';
import Person from  './array.js';
import './App.css';
import AddForm from "./AddForm";
class App extends Component {
state = {
 friends :[
  {
      name:"Bhuwan Giri",
      roll:2,
      address:"Gwarko,Ktm",
      mobile:9861234566
      },
      {
        name:"Surya Ghising",
        roll:31,
        address:"Jorpati,Ktm",
        mobile:9812131415
      },
      {
        name:"Elisha Bista",
        roll:8,
        address:"Maitidevi,Ktm",
        mobile:9861234566
      },
      {
        name:"Suman Sapkota",
        roll:30,
        address:"Asan,Ktm",
        mobile:9861234566
      },
      {
        name:"Lata Paudel",
        roll:12,
        address:"Gaurighar,Ktm",
        mobile:9861234566
      },
      {
        name:"Kaushal Guragain",
        roll:16,
        address:"Kalopul,Ktm",
        mobile:9861234566
      },
      {
        name:"Keshar Paudel",
        roll:35,
        address:"Kalopul,Ktm",
        mobile:9861744256
      },
      {
        name:"Prabin Mainali",
        roll:23,
        address:"Sundarijal,Ktm",
        mobile:9808967543
      }
  ]
}

save= friend =>{
  this.setState({
    friends: this.state.friends.concat([friend])
  });
}

clickhandler = event=>{
  this.setState({
  name: "",
  roll:""
  });
  }


  render() {
    return (
      <div>
      <h2>list of friends</h2>
      <AddForm onSave={this.save}/>
      {
         this.state.friends.map(friend=>
          <Person name={friend.name}
                       roll={friend.roll}
                       address={friend.address}
                       mobile={friend.mobile}/>)                
      }
     </div>
    );
  }
}

export default App;
