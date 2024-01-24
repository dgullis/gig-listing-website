import React from "react";
import Gig from "./Gig";
import gigsData from "./gigsData";
import { useState } from "react";


const GigList = () => {

    const [favouriteGigs, setFavouriteGigs] = useState([])

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

    const filteredGigsFavourite = gigsData.filter((gig) => 
        favouriteGigs.includes(gig.id)
    );

    const filteredGigsNotFavourite = gigsData.filter((gig) => 
        !favouriteGigs.includes(gig.id)
    );

    

    return (
        <div>
            <h1>Favourite Gigs</h1>
            {filteredGigsFavourite.map((gig) => (
                <Gig
                    key={gig.id}
                    gigId={gig.id}
                    name={gig.name}
                    eventDescription={gig.eventDescription}
                    timeDate={gig.timeDate}
                    location={gig.location}
                    addToFavouriteGigs={addToFavouriteGigs}
                    removeFromFavouriteGigs={removeFromFavouriteGigs}
                    favouriteGigs={favouriteGigs}
                    />
            ))}

            <h1> Not Favourite Gigs </h1>
            {filteredGigsNotFavourite.map((gig) => (
                <Gig
                    key={gig.id}
                    gigId={gig.id}
                    name={gig.name}
                    eventDescription={gig.eventDescription}
                    timeDate={gig.timeDate}
                    location={gig.location}
                    addToFavouriteGigs={addToFavouriteGigs}
                    removeFromFavouriteGigs={removeFromFavouriteGigs}
                    favouriteGigs={favouriteGigs}
                    />
            ))}
        </div>
    )

};

export default GigList;

