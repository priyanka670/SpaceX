import React from 'react';
import './App.css';
import  axios from 'axios';
import Filter from './filters';
import SpaceXList from './components/SpaceXList';

class App extends React.Component{
  state={
    spaceData:[],
    year:"",
    successfulLaunch:false
    
  }
  // componentdidmount will call the api through a promise [axios]
  componentDidMount(){
    // enter URL 3rd party library
    axios.get("https://api.spaceXdata.com/v3/launches?limit=100")
  .then((response) => {   
     // handle success
    // console.log(response);
    //it will update the state of space data. previously it was empty state then state is fetched from backend.
    this.setState({spaceData:response.data , selectedYear:""})
  })
 
  }
  render(){
    //rendering data
    return(
      //jsx code
      
      <div className="App">
        <h1>SpaceX Launch Program</h1>
        <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row align-items-center align-items-sm-center align-items-md-start align-items-lg-start">
          <Filter onYearChange={}/>

          {this.state.spaceData?<SpaceXList myData={this.state.spaceData}/>:<p>Loading....</p>}
        </div>
      </div>
    )
  }
  
}
  export default App;

