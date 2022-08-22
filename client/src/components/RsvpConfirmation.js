import React, { useState } from "react";
import "./RsvpForm.css";

function RsvpConfirmation({isAttend}) {
	const [attend, setAttend] = useState(isAttend);
	const attendResonpse = "We got your reservation, looking forward to see you there :)";
	const noAttendResonpse = "Sadge :(";
	const response = attend ? attendResonpse : noAttendResonpse;	
	return (
		<div className="rsvp__wrapper">
			<h1>
				{response}
			</h1>
		</div>
	)
}

export default RsvpConfirmation