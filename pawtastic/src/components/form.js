import React ,{Component} from 'react';
 

export default class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      brand:'',
      birthday:'',
      is_Female: true,
      optionSpayed:'',
      weight:''
    }
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleBrandChange=this.handleBrandChange.bind(this);
    this.handleBirthdayChange=this.handleBirthdayChange.bind(this);
    this.handleGenderOption=this.handleGenderOption.bind(this);
    this.handleSpayOption=this.handleSpayOption.bind(this);
    this.handleWeightChange=this.handleWeightChange.bind(this);

  }

  handleNameChange(event){
      this.setState({name: event.target.value});
      console.log("event",event);
      event.preventDefault();
    }
    handleBrandChange(event){
      this.setState({brand: event.target.value});
      console.log("event",event);
      event.preventDefault();
    }
    handleBirthdayChange(event){
      this.setState({birthday: event.target.value});

      console.log("event",event);
      event.preventDefault();
    }
    handleGenderOption(event){
      this.setState({is_Female: !this.state.is_Female});
      console.log(this.state.is_Female);  
      console.log("inside handleGenderOption");
      console.log("event",event);
      event.preventDefault();
    }
    handleSpayOption(event){
      console.log("event",event);
      event.preventDefault();
    }
    handleWeightChange(event){
      console.log("event",event);
      event.preventDefault();
    }
   
  render(){
    return(
        <div>

        <form>
            <div className='row'>
              <h2> Yay! We love dogs ,give us the basics about your pup</h2>
            </div>
            <div className='row'>
              <div className='input'>
              <label>
                  Name:
                </label>

                <input id='name' value={this.state.name}  type='text' onChange={this.handleNameChange}/>              
                </div>

            <label>Upload Image</label>
            <i className='fa fa-upload'></i>
            </div>
            <div className='row'>
                <div className='input'>
                <label>
                    Brand:
                    </label>
                    <input id='brand' value={this.state.brand}  type='text'  onChange={this.handleBrandChange}/>

                </div>
                <div className='input'>
                <label>
                    Birthday:
                    </label>
                    <input id='birthday'  value={this.state.birthday} type='text'  onChange={this.handleBirthdayChange}/>

                </div> 
            </div>
            <div className='row'>
              <div className='input'>
              <label>
                    Gender:
                    </label>
                    <div className='row  row-inner'>
                        <input type="checkbox" id="genderToggle" className="checkbox2" onChange={this.handleGenderOption} checked={this.state.is_Female}/>
                        <label forhtml="genderToggle" className="switch2">
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
                    <input type="checkbox" id="toggle" className="checkbox" />
                    <label forhtml="toggle" className="switch">
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
           <div className='button1'><button id='back'>Back</button></div> <div className='bitton2'><button id='next'>Next</button></div>
        </div>
      </form>
        </div>
      
    )
  }
  }
