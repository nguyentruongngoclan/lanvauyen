import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function SelectionComponent({ label, name, onChange, variant, options, helperText, defaultValue, disabled}) {
  return (
    <div>
      <TextField
        required
        select
				fullWidth
        disabled = {disabled}
        id={label}
				name={name}
        label={label}
        variant={variant}
				defaultValue={defaultValue}
        onChange={onChange}
        helperText={helperText}
      >
        {options.map((option) => (
          <MenuItem 
					key={option} 
					value={option}
					size="large">
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default SelectionComponent;
