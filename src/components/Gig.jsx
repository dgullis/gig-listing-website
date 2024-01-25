import React, { useEffect } from 'react'
import "../Gig.css"
import { useState } from "react";




const FavouriteButton = ({ gigId, favourite, setFavourite, addToFavouriteGigs, removeFromFavouriteGigs }) => {

    const handleCLick = () => {
        // console.log(gigId)
        setFavourite(!favourite)
        // onToggleFavourite(gigId, !favourite)

        if(!favourite) {
            addToFavouriteGigs(gigId, favourite)
        } else {
            removeFromFavouriteGigs(gigId, favourite)
        }

    };

    return <div>
        {favourite ? (
            <div>
                <p className="favourited">In favourites</p>
                <button className="heart-button liked" data-testid="unfavourite" onClick={handleCLick}>
                ❤
                </button>
            </div>
        ) : (
            <div>
                <p className="favourited">Not in favourites</p>
                <button className="heart-button" data-testid="favourite" onClick={handleCLick}>
                ❤
                </button>
            </div>
        )}
    </div>
}
        

const Gig = ({ gigId, name, eventDescription, timeDate, location, addToFavouriteGigs, removeFromFavouriteGigs, favouriteGigs }) => {
    //favourite state is mananged at level of Gig component
    // each gig needs its own favourite state
    const [favourite, setFavourite] = useState(false)
    
    useEffect(() => {
        setFavourite(favouriteGigs.includes(gigId));
    }, [favouriteGigs, gigId]);
    
    return (
        <div className="gig-listing">
            <h3>{name}</h3>
            <p className="event-description"> {eventDescription} </p>
            <p className="time-date"> {timeDate}</p>
            <p className="location"> {location} </p>
            <FavouriteButton gigId={gigId} favourite={favourite} setFavourite={setFavourite} addToFavouriteGigs={addToFavouriteGigs} removeFromFavouriteGigs={removeFromFavouriteGigs} />
        </div>
    );
};

export default Gig;