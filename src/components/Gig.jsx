import React from 'react'
import "../Gig.css"

const Gig = () => {
    return (
        <div className="gig-listing">
            <img className="artist-image" src="./src/assets/djSeinfeld.jpeg"></img>
            <h3>DJ Seinfeld</h3>
            <p className="event-description"> DJ Seinfeld playing xyz </p>
            <p className="time-date"> Time and Data </p>
            <p className="location"> Location </p>
        </div>
    );
};

export default Gig;