import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoSelect({
	label,
	data,
	id,
	setInputValue,
	inputValue,
	Icon,
	freeSolo,
	required,
	referent,
	reset,
}) {
	const [value, setValue] = useState(null);
	useEffect(() => {
		if (reset) {
			setValue(null);
		}
	}, [reset]);
	return (
		<Autocomplete
			id={id}
			fullWidth={true}
			options={data}
			autoHighlight
			getOptionLabel={(option) => option.label}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			freeSolo={freeSolo}
			renderOption={(props, option) => (
				<Box
					component="li"
					sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
					{...props}
				>
					{option.label} {referent && `(${option.region}) ${option.nom}`}
				</Box>
			)}
			renderInput={(params) => (
				<Box sx={{ display: "flex", alignItems: "flex-end" }}>
					<Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
					<TextField
						{...params}
						label={label}
						variant="standard"
						required={required}
					/>
				</Box>
			)}
		/>
	);
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
