import React ,{Component} from 'react';
 

export default class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      brand:'',
      birthday:'',
      is_Female: false,
      optionSpayed:false,
      weight:'1'
    }
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleBrandChange=this.handleBrandChange.bind(this);
    this.handleBirthdayChange=this.handleBirthdayChange.bind(this);  
    this.handleWeightChange=this.handleWeightChange.bind(this);
    this.onBackClick=this.onBackClick.bind(this);
    this.onNextClick=this.onNextClick.bind(this);

  }

  handleNameChange(event){
      this.setState({name: event.target.value});
    //  console.log("event",event);
      event.preventDefault();
    }
    handleBrandChange(event){
      this.setState({brand: event.target.value});
    //  console.log("event",event);
      event.preventDefault();
    }
    handleBirthdayChange(event){
      this.setState({birthday: event.target.value});

     // console.log("event",event);
      event.preventDefault();
    }  
    handleWeightChange(event){
      this.setState({weight: event.target.value});
      console.log(this.state.weight);
      //console.log("event",event);
      event.preventDefault();
    }
    onBackClick(event){
      let inputValue= event.target.value;
      alert(inputValue+" clicked");
      console.log(this.state);
      event.preventDefault();
    }
    onNextClick(event){
      let inputValue= event.target.value;
      alert(inputValue +` clicked`);
      console.log(this.state);
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
                    Breed:
                    </label>
                    <input id='brand' value={this.state.brand}  type='text'  onChange={this.handleBrandChange}/>

                </div>
                <div className='input'>
                <label>
                    Birthday:
                    </label>
                    <input id='birthday'  value={this.state.birthday} type='date'  onChange={this.handleBirthdayChange}/>

                </div> 
            </div>
            <div className='row'>
              <div className='input'>
              <label>
                    Gender:
                    </label>
                    <div className='row  row-inner'>
                        <input type="checkbox" id="genderToggle" className="checkbox2" onChange={()=>{this.setState({is_Female: !this.state.is_Female})}} checked={this.state.is_Female}/>
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
                    <input type="checkbox" id="toggle" className="checkbox" onChange={()=>{this.setState({optionSpayed: !this.state.optionSpayed})}} checked={this.state.optionSpayed}/>
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
            <select value={this.state.weight} onChange={this.handleWeightChange}>
                <option  value='1'>0-20 lbs</option>
                <option value='2'>20-50 lbs</option>
                <option value='3'>50-100 lbs</option>
                <option value='4'>100+ lbs</option>
              </select>


            </div>
 
          </div>

        </div>
        <div className='row2'>
           <div className='button1'><button id='next' value='Next' onClick={this.onNextClick}>Next</button></div> <div className='bitton2'><button id='back' value='Back' onClick={this.onBackClick}>Back</button></div>
        </div>
      </form>
        </div>
      
    )
  }
  }
