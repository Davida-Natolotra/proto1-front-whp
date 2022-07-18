import { TextField, Box } from "@mui/material";

const TextInput = ({ Icon, id, label }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "flex-end" }}>
			<Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
			<TextField
				id={id}
				label={label}
				variant="standard"
				sx={{ width: "100%" }}
			/>
		</Box>
	);
};

export default TextInput;
