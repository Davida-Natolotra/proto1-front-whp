import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";
import WcIcon from "@mui/icons-material/Wc";

export default function CheckboxesGroup({ setSexe, sexe }) {
	const [Masculin, setMasculin] = useState(false);
	const [Feminin, setFeminin] = useState(false);

	useEffect(() => {
		if (sexe === null) {
			setMasculin(false);
			setFeminin(false);
		}
	}, [sexe]);

	const handleChange = (event) => {
		if (event.target.name === "Masculin") {
			setMasculin(event.target.checked);
			setFeminin(!event.target.checked);
			setSexe("Masculin");
		}
		if (event.target.name === "Feminin") {
			setFeminin(event.target.checked);
			setMasculin(!event.target.checked);
			setSexe("Feminin");
		}
	};

	const error = [Masculin, Feminin].includes(false);

	return (
		<Box sx={{ display: "flex", alignItems: "flex-end" }}>
			<Stack direction="row" spacing={1}>
				<WcIcon sx={{ color: "action.active", my: 0.5 }} />
				<FormControl
					required
					component="fieldset"
					sx={{ m: 3 }}
					variant="standard"
				>
					<FormLabel component="legend">Sexe</FormLabel>
					<FormGroup>
						<Stack spacing={3} direction="row">
							<FormControlLabel
								control={
									<Checkbox
										checked={Masculin}
										onChange={handleChange}
										name="Masculin"
									/>
								}
								label="Masculin"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={Feminin}
										onChange={handleChange}
										name="Feminin"
									/>
								}
								label="Féminin"
							/>
						</Stack>
					</FormGroup>

					{/* <FormHelperText>You can display an error</FormHelperText> */}
				</FormControl>
			</Stack>
		</Box>
	);
}
