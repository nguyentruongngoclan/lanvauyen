import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputComponent from "../components/InputComponent";
import SelectionComponent from "../components/SelectionComponent";
import "./Rsvp.css";

function Rsvp() {
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
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  return (
    <>
      <div className="rsvp-container">
        <div className="rsvp-header">
          <h1>Celebrate with us</h1>
          <h2>Let us know if you're coming by Nov 15, 2022!</h2>
        </div>        
        <div className="rsvp__wrapper">
          <Stack spacing={1} direction="column">
            <Stack spacing={1} direction="row">
              <InputComponent
                label="First Name"
                name="firstName"
                inputType="text"
                onChange={handleChange}
                variant="filled"
              />
              <InputComponent
                label="Last Name"
                name="lastName"
                inputType="text"
                onChange={handleChange}
                variant="filled"
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
            />
            <Button variant="contained" onClick={onSubmit}>
              Reserve
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Rsvp;
