import React from 'react';
import './card.css';

const Card = (props) => {
const {cardData} =props;
console.log("Its coming...",cardData);
return (
    <div className="cardContainer card mb-3">
       {cardData.links.mission_patch_small ? <img className="card-img-top imageContainer" src={cardData.links.mission_patch_small} alt="Card cap"/> : null}
            <div className="card-body">
<h3 style={{color:"darkblue"}}>{cardData.mission_name}#{cardData.flight_number}</h3>
                <h6 className="card-title"><b>Mission Ids:{cardData.mission_id?
                <ul>{cardData.mission_id.map(id=><li key="id">{id}</li>)}</ul>:null}</b></h6>
                <h6 className="card-title"><b>Launch Year:{cardData.launch_year}</b></h6>
                <h6 className="card-title"><b>Successful Launch:{cardData.launch_success?"true":"false"}</b></h6>
                
            </div>
    </div>
)

}
export default Card;