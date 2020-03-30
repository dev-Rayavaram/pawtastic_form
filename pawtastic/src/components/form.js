import React ,{Component} from 'react';
 

export default class Form extends Component{
 
  render(){
    return(
        <div>

        <form onSubmit={this.handleSubmit}>
            <div className='row'>
              <h2> Yay! We love dogs ,give us the basics about your pup</h2>
            </div>
            <div className='row'>
              <div className='input'>
              <label>
                  Name:
                </label>

                <input id='name'  type='text' />              
                </div>

            <label>Upload Image</label>
            <i className='fa fa-upload'></i>
            </div>
            <div className='row'>
                <div className='input'>
                <label>
                    Brand:
                    </label>
                    <input id='name'  type='text' />

                </div>
                <div className='input'>
                <label>
                    Birthday:
                    </label>
                    <input id='name'  type='text' />

                </div> 
            </div>
            <div className='row'>
              <div className='input'>
              <label>
                    Gender:
                    </label>
                    <div className='row  row-inner'>
                        <input type="checkbox" id="toggle2" className="checkbox2" />
                        <label for="toggle2" className="switch2">
                        <span className="switch2-inner" />
                        <span className="switch2-switch" />
                        </label>
                    </div>
 
              </div>
              <div className='input'>
              <label>
                    Spayed/Neutered:
                    </label>
                    <div className='row  row-inner'>
                    <input type="checkbox" id="toggle" class="checkbox" />
                    <label for="toggle" className="switch">
                    <span className="switch-inner" />
                    <span className="switch-switch" />
                    </label>
                    </div>
              </div>
            </div>
            <div className='row'>
          <div className='input'>
          <label>
                Weight:
            </label>
            <div className='row row-inner'>
                <button>0-20 lbs</button>
                <button>20-50 lbs</button>
                <button>50-100 lbs</button>
                <button>100+ lbs</button>

            </div>
 
          </div>

        </div>
        <div className='row2'>
           <div className='button1'><button>Back</button></div> <div className='bitton2'><button>Next</button></div>
        </div>
      </form>
        </div>
      
    )
  }
  }
