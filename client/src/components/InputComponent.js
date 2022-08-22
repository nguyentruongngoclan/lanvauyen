import React from "react";
import TextField from '@mui/material/TextField'

function InputComponent({ inputType, name, label, onChange, variant, isInvalid, helperText }) {
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
			error={isInvalid}
			helperText={isInvalid ? helperText : null}
		/>
  );
}

export default InputComponent;
