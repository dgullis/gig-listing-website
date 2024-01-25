// import djseinfeldImage from '../assets/djSeinfeld.jpeg';
// import peteyImage from '../assets/petey.jpeg';
import React, { useState, useEffect } from "react";
import Gig from "./Gig";


const gigsData = () => {
    const [gigs, setGigs] = useState([])


    return (

        <>
        
        {gigs.map((gigData)=> {
            <Gig 


            />

        })}
        
        </>
    )

}

export default gigsData;