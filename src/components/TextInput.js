import { TextField, Box } from "@mui/material";

const TextInput = ({ Icon, id, label, required, value, setValue }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "flex-end" }}>
			<Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
			<TextField
				id={id}
				label={label}
				variant="standard"
				sx={{ width: "100%" }}
				required={required}
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</Box>
	);
};

export default TextInput;
