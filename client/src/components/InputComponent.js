import React from "react";
import TextField from '@mui/material/TextField'

function InputComponent({ inputType, name, label, onChange, variant }) {
  return (
		<TextField
			required
			fullWidth
			id={label}
			name={name}
			label={label}
			type={inputType}
			variant={variant}
			onChange={onChange}
		/>
  );
}

export default InputComponent;
