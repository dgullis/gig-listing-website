import React from "react";
import Gig from "./Gig";
import { useState, useEffect } from "react";


const GigList = () => {

    const [gigs, setGigs] = useState([])
    const [favouriteGigs, setFavouriteGigs] = useState([])

    useEffect(() => {
        const URL = "https://makers-gig-backend.onrender.com/events"
        fetch(URL)
            .then(response => response.json())
            .then(data => setGigs(data))
    });

    const addToFavouriteGigs = (gigId) => {
        console.log(gigId)
        console.log(favouriteGigs)
        setFavouriteGigs((prevfavouriteGigs) => [...prevfavouriteGigs, gigId])
        console.log(favouriteGigs)
    }

    const removeFromFavouriteGigs = (gigId) => {
        setFavouriteGigs((prevfavouriteGigs) => prevfavouriteGigs.filter((gig) =>
            gig !== gigId)
        );
    };

    const filteredGigsFavourite = gigs.filter((gig) => 
        favouriteGigs.includes(gig.event_id)
    );

    const filteredGigsNotFavourite = gigs.filter((gig) => 
        !favouriteGigs.includes(gig.event_id)
    );

    

    return (
        <div>
            <h1>Favourite Gigs</h1>
            {filteredGigsFavourite.map((gig) => (

            <div className="gig">
                <Gig
                    key={gig.event_id}
                    gigId={gig.event_id}
                    name={gig.band_name}
                    eventDescription={gig.description}
                    timeDate={gig.time}
                    location={gig.location}
                    addToFavouriteGigs={addToFavouriteGigs}
                    removeFromFavouriteGigs={removeFromFavouriteGigs}
                    favouriteGigs={favouriteGigs}
                    />
            </div>
            ))}

            <h1> Not Favourite Gigs </h1>
            {filteredGigsNotFavourite.map((gig) => (
                <div className="gig">
                <Gig
                    key={gig.event_id}
                    gigId={gig.event_id}
                    name={gig.band_name}
                    eventDescription={gig.description}
                    timeDate={gig.time}
                    location={gig.location}
                    addToFavouriteGigs={addToFavouriteGigs}
                    removeFromFavouriteGigs={removeFromFavouriteGigs}
                    favouriteGigs={favouriteGigs}
                    />
                </div>
            ))}

        </div>
    )

};

export default GigList;

