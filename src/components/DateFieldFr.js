import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import frLocale from "date-fns/locale/fr";
import { frFR as calFR } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const DateFieldFr = ({ label, fdate, date, error, helperText, name }) => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDateFns}
			adapterLocale={frLocale}
			localeText={
				calFR.components.MuiLocalizationProvider.defaultProps.localeText
			}
		>
			<MobileDatePicker
				label={label}
				value={date}
				onChange={(newValue) => {
					fdate(newValue);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						name={name}
						error={error}
						helperText={helperText}
					/>
				)}
				disableFuture
				variant="standard"
			/>
		</LocalizationProvider>
	);
};

export default DateFieldFr;
