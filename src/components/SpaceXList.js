import  React from 'react';
import Card from '../card';

const SpaceXList =(props)=>{
    // destructuring myData from props
    const {myData} = props;

    const newSpaceXData= myData.map(currentData =>{
        return (
          //logic to store data in newSpaceXData  
        <div className="col d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start" key={currentData.flight_number}>
          <Card cardData={currentData}/>
          </div>
        )
       })
    return(
        <div className="ml-0 ml-sm-0 ml-md-4 ml-lg-4 ml-xl-4">
            
            {myData.length?<div className="row no-gutters justify-content-start">
            {newSpaceXData} 
            </div>:<p>No Data Found</p>}

        </div>
    )
}

export default SpaceXList;