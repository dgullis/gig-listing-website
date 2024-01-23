import Hello from "./components/Hello";
import djseinfeldImage from "./assets/djSeinfeld.jpeg";
import peteyImage from "./assets/petey.jpeg"
import Gig from "./components/Gig";

import "./App.css";

function App() {
  return (
    <>
      <Gig 
      imageSrc={djseinfeldImage}
      name="DJ Seinfeld"
      eventDescription="event description"
      timeDate="time and date"
      location="location"/>
      <br></br>

<Gig 
      imageSrc={peteyImage}
      name="Petey"
      eventDescription="event description"
      timeDate="time and date"
      location="location"/>
    </>
  );
}

export default App;
