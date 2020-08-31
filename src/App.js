import React from 'react';
import './App.css';
import  axios from 'axios';
import Filter from './filters';
import SpaceXList from './components/SpaceXList';
import { allDatas , datasByYear, datasByLaunch, datasByLand, datasByAllFilters, datasByLandAndYear, datasByLaunchAndYear, datasBylaunchAndLand} from "./apis/index";
class App extends React.Component{
  state={
    spaceData:[],
    year:"",
    successfulLaunch:"",
    successfulLand:"",
    
  }
  // componentdidmount will call the api through a promise [axios]
  async componentDidMount(){
    // enter URL 3rd party library
     const spaceData = await allDatas()
   
    this.setState({spaceData})
    
  }
  getFilters = () => {
    const {year , successfulLaunch, successfulLand} = this.state;
    if(year && successfulLaunch && successfulLand){
     
      return datasByAllFilters(year, successfulLaunch, successfulLand);
    }else if( year && successfulLaunch){
      
      return datasByLaunchAndYear(year, successfulLaunch);
    }else if( year && successfulLand){
     
      return datasByLandAndYear(year,successfulLand);
    }else if( successfulLand && successfulLaunch){
      
      return datasBylaunchAndLand(successfulLaunch,successfulLand);
    }else if( year){
      
     return datasByYear(this.state.year)
    }else if(successfulLaunch){
      
      return datasByLaunch(successfulLaunch);
    }else if(successfulLand){
      
      return datasByLand(successfulLand);
    }else{
      
      return allDatas();
    }
  }

  selectYear = (year) =>{
    this.setState({year},
      async ()=>{
      const spaceData = await this.getFilters();
      this.setState({spaceData})
      
    }
    )
  }

  isSuccessfulLaunch=(successfulLaunch)=>{
    this.setState({successfulLaunch}, async ()=>{
      const spaceData = await this.getFilters();
      this.setState({spaceData})
      
    })
  }

  isSuccessfulLand=(successfulLand)=>{
    this.setState({successfulLand}, async ()=>{
      const spaceData = await this.getFilters();
      this.setState({spaceData})
     
    })
  }
  clearFilter = () =>{
    this.setState({ year:"", successfulLaunch:"", successfulLand:"" }, async ()=>{
        const spaceData = await this.getFilters();
        this.setState({spaceData})
       
    })
  }
  render(){
    // console.log(this.state)
     //rendering data
     return(
       //jsx code
       <div className="App">
         <h1>SpaceX Launch Program</h1>
         <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row align-items-center align-items-sm-center align-items-md-start align-items-lg-start">
           <Filter 
             selectYear={this.selectYear} 
             isSuccessfulLaunch={this.isSuccessfulLaunch} 
             isSuccessfulLand={this.isSuccessfulLand}
             clearFilter={this.clearFilter}
             />
           {this.state.spaceData?<SpaceXList myData={this.state.spaceData}/>:<p>Loading....</p>}
         </div>

         <div className="devBy">
            <b>Developed By : </b>Priyanka Sahu
         </div>
       </div>
     )
   }
   
 }
   export default App;
 




