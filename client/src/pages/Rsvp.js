import React, { useState } from "react";
import "../components/RsvpForm";
import RsvpForm from "../components/RsvpForm";
import RsvpConfirmation from "../components/RsvpConfirmation";
import "./Rsvp.css";

function Rsvp() {
  const [state, setState] = useState({submitted : false, attending : false});
  console.log("RSVP State =", state);
  return (
    <>
      <div className="rsvp-container">
        <div className="rsvp-header">
          <h1>Celebrate with us</h1>
          <h2>Let us know if you're coming by Nov 15, 2022!</h2>
        </div>
        {state.submitted 
          ? <RsvpConfirmation isAttend={state.attending}/>
          : <RsvpForm onReserve={setState}/>}
      </div>             
    </>
  );
}

export default Rsvp;
