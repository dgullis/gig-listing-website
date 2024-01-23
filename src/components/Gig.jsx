import React from 'react'
import "../Gig.css"
import { useState } from "react";

const Gig = (props) => {

    const [isFavourite, setFavourite] = useState(false);

    const handleFavouriteToggle = () => {
        setFavourite(!isFavourite)
    }
    return (
        <div className="gig-listing">
            <img className="artist-image" src={props.imageSrc} alt={props.name}></img>
            <h3>{props.name}</h3>
            <p className="event-description"> {props.eventDescription} </p>
            <p className="time-date"> {props.timeDate}</p>
            <p className="location"> {props.location} </p>
            <div>
                {isFavourite ? (
                    <div>
                        <p className="favourited">In favourites</p>
                        <button data-testid="favourite" onClick={handleFavouriteToggle}>
                            unfavourite
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="favourited">Not in favourites</p>
                        <button data-testid="favourite" onClick={handleFavouriteToggle}>
                            favourite
                        </button>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default Gig;