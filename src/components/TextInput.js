import { TextField, Box } from "@mui/material";

const TextInput = ({ Icon, values, handleBlur, error, handleChange, name }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "flex-end" }}>
			<Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
			<TextField
				label="Nom Facebook"
				name={name}
				onChange={handleChange}
				value={values.nom}
				onBlur={handleBlur}
				error={error}
				helperText={error}
			/>
		</Box>
	);
};

export default TextInput;
