import { Component } from "react";
import './App.css'

class App1 extends Component {
  render() {
    return (
      <>
        <div className='box1'>
        {this.props.value.map((item,index)=>{
          return(   
            <div className="bx2"> 
            <h4  key={index} > Name :{item.name} || Department: {item.department} || Rating :{item.rating}</h4>
            </div>  
            )  
          })      
          }
        </div>
        <button  className='nm2' onClick={this.props.tf}>GO BACK</button>
        </>
    )
  }
}
export default App1;