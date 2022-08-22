import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputComponent from "./InputComponent";
import SelectionComponent from "./SelectionComponent";
import axios from "axios";
import "./RsvpForm.css";

function RsvpForm({onReserve}) {
	const [invalidState, setInvalidState] = useState({
		firstName : false,
		lastName : false
	});
	const [state, setState] = useState({
    firstName: "",
    lastName: "",
    attend: "Yes",
    reservations: "1",
  })
  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }  
	const attendOptions = ["Yes", "No"];
  const reservationOptions = ["1", "2", "3"];
  const onSubmit = (event) => {
    event.preventDefault();
		const invalidState = {
			firstName : state.firstName === "" ? true : false,
			lastName : state.lastName === "" ? true : false
		}
		setInvalidState(invalidState);
		const isInvalid = invalidState.firstName || invalidState.lastName;
		if (isInvalid) {
			return;
		}
    const payload = {
      first_name: state.firstName,
      last_name: state.lastName,
      attend: state.attend,
      reservations: state.reservations,
    }
    console.log("payload", payload);
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
				onReserve({submitted : true, attending : state.attend === "Yes" ? true : false});
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };
  return (
    <div className="rsvp__wrapper">
      <Stack spacing={1} direction="column">
        <Stack spacing={1} direction="row">
          <InputComponent
            label="First Name"
            name="firstName"
            inputType="text"
            onChange={handleChange}
            variant="filled"
						isInvalid={invalidState.firstName}
						helperText="Please provide your first name"
          />
          <InputComponent
            label="Last Name"
            name="lastName"
            inputType="text"
            onChange={handleChange}
            variant="filled"
						isInvalid={invalidState.lastName}
						helperText="Please provide your last name"
          />
        </Stack>
        <SelectionComponent
          label="Are you attending?"
          name="attend"
          onChange={handleChange}
          options={attendOptions}
          variant="filled"
          defaultValue={attendOptions[0]}
        />
        <SelectionComponent
          label="Reservations"
          name="reservations"
          onChange={handleChange}
          options={reservationOptions}
          variant="filled"
          helperText="Total guests attending (including yourself)"
          defaultValue={reservationOptions[0]}
          disabled={state.attend === "No" ? true : false}
        />
        <Button variant="contained" onClick={onSubmit}>
          Reserve
        </Button>
      </Stack>
    </div>
  );
}

export default RsvpForm;
