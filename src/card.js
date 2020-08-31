import React from 'react';
import './card.css';

const Card = (props) => {
const {cardData} =props;
const landing =cardData.rocket.first_stage.cores[0].land_success;
return (
    <div className="cardContainer card mb-3">
       {cardData.links.mission_patch_small ? <img className="card-img-top imageContainer" src={cardData.links.mission_patch_small} alt="Card cap"/> : null}
            <div className="card-body p-0 pt-2">
                <h6 style={{color:"darkblue"}}>{cardData.mission_name}#{cardData.flight_number}</h6>
                <div className="card-title">
                    <h6><b>Mission Ids:</b></h6>
                        {cardData.mission_id?<ul>{cardData.mission_id.map(id=><li key={id}>{id}</li>)}</ul>:null}
                </div>
            
                <p className="card-title m-0"><b>Launch Year:</b><span className="ml-1">{cardData.launch_year}</span></p>
                <p className="card-title m-0"><b>Successful Launch:</b><span className="ml-1">{cardData.launch_success?"true":"false"}</span></p>        
                <p className="card-title m-0"><b>Successful Landing :</b><span className="ml-1">{(landing !==null)?(landing?"true":"false"):("NA")}</span></p>
            

                
            </div>

           

    </div>
)

}
export default Card;