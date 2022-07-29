import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Stack } from "@mui/material";
import WcIcon from "@mui/icons-material/Wc";

export default function CheckboxesGroup({
	handleChange,
	values,
	touched,
	errors,
}) {
	return (
		<Box sx={{ display: "flex", alignItems: "flex-end" }}>
			<Stack direction="row" spacing={1}>
				<WcIcon sx={{ color: "action.active", my: 0.5 }} />
				<FormControl error={Boolean(touched.sexe && errors.sexe)}>
					<FormLabel id="demo-row-radio-buttons-group-label">Sexe</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="sexe"
						value={values.sexe}
						onChange={handleChange}
					>
						<FormControlLabel
							value="female"
							control={<Radio />}
							label="Féminin"
						/>
						<FormControlLabel
							value="male"
							control={<Radio />}
							label="Masculin"
						/>
					</RadioGroup>
					<FormHelperText>{touched.sexe && errors.sexe}</FormHelperText>
				</FormControl>
			</Stack>
		</Box>
	);
}
