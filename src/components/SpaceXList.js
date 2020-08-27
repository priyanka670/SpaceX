import  React from 'react';
import Card from '../card';

const SpaceXList =(props)=>{
    // destructuring myData from props
    const {myData} = props;

    const newSpaceXData= myData.map(currentData =>{
        return (
          //logic to store data in newSpaceXData  
        <div className="" key={currentData.flight_number}>
          <Card cardData={currentData}/>
          </div>
        )
       })
    return(
        <div>
            <div className="d-flex flex-wrap justify-content-around" >
                {newSpaceXData} 
            </div>
        </div>
    )
}

export default SpaceXList;