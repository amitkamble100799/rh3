import './App.css';
import React, { Component } from 'react'
import App1 from './App1';

export default class App extends Component {
constructor(){
  super();
  this.state={
    name:"",
    department:"",
    rating:"",
    click: true,
    data:[]
  }
  
}
  
 
  handle=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.department]:event.target.value})
    this.setState({[event.target.rating]:event.target.value})
  }

  toggle= ()=>{
    this.setState({click: !this.state.click})
  }

  click=()=>{
    const obj={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data, click:false, name:"",department:"",rating:""})
  }


  render() {
    return (


    <>
    {this.state.click?
    
      <>
      <div className='txt'>
       
        <form id='form'>
     <h1 id='h1'>EMPLOYEE FEEDBACK FORM</h1>
<label className='nm'>Name :</label>
<input type='text'  className='nm1' name="name" placeholder='Enter Your Name' value={this.state.name} onChange={this.handle}/>

<label className='nm'>Department :</label>
<input type='text' className='nm1' name="department" placeholder='Enter Your Department' value={this.state.department} onChange={this.handle}/>

<label className='nm'>Rating :</label>
<input type='number' className='nm1' name="rating"  value={this.state.Rating} onChange={this.handle}/>

<button onClick={this.click} id='nm2'>submit</button>
   </form>
 </div>
</>
    :
    <App1 value={this.state.data} tf={this.toggle}/>
  }
  </>    
    )
  }
}
