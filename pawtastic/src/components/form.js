import React ,{Component} from 'react';


export default class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      value:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

    handleChange(event){
      this.setState({value: event.target.value});
      console.log("event",event);
      event.preventDefault();
    }
    handleSubmit(event){
      alert(`name was submitted ${this.state.value}`);
      event.preventDefault();

    }
  render(){
    return(
        <div>

        <form onSubmit={this.handleSubmit}>
            <div className='row'>
            <h2> Yay! We love dogs ,give us the basics about your pup</h2>
            <label>
            Name:
            </label>

            <input id='name' value={this.state.value} type='text' onChange={this.handleChange}/>
            <label>Upload Image</label>

            </div>
            <div className='row'>
   
                    <label>
                    Brand:
                    </label>
                    <input id='name' value={this.state.value} type='text' onChange={this.handleChange}/>
                    <label>
                    Birthday:
                    </label>
                    <input id='name' value={this.state.value} type='text' onChange={this.handleChange}/>

  
            </div>
            <div className='row'>
   
                    <label>
                    Gender:
                    </label>
                    <button>Female</button><button>Male</button>
                    <label>
                    Spayed/Neutered:
                    </label>
                    <input type='radio'></input>
  
            </div>
            <div className='row'>
   
            <label>
                Weight:
            </label>
            <button>0-20 lbs</button>
            <button>20-50 lbs</button>
            <button>50-100 lbs</button>
            <button>100+ lbs</button>

        </div>

      </form>
        </div>
      
    )
  }
  }
