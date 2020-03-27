import React ,{Component} from 'react';


export default class Form extends Component{
 
  render(){
    return(
        <div>

        <form onSubmit={this.handleSubmit}>
            <div className='row'>
            <h2> Yay! We love dogs ,give us the basics about your pup</h2>
            <label>
            Name:
            </label>

            <input id='name'  type='text' />
            <label>Upload Image</label>

            </div>
            <div className='row'>

                    <label>
                    Brand:
                    </label>
                    <input id='name'  type='text' />
                    <label>
                    Birthday:
                    </label>
                    <input id='name'  type='text' />

  
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
