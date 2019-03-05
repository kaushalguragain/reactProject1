import React,{Component} from 'react';


class AddForm extends Component{
  state ={
    name:"",
    roll: ""
  }
  onchangeHandler = event=>{
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  clickHandler = event =>{
    console.log(this.state);
    this.props.onSave(this.state);
  }
  render(){
    return(
        <div>
          <input type="text"  id="name" onChange={this.onchangeHandler} />
          <input type="text"  id="roll" onChange={this.onchangeHandler}/>
          <button onClick ={this.clickHandler}>Save</button>  
      </div>
      )
    }
   
  }

 
  export default AddForm;
