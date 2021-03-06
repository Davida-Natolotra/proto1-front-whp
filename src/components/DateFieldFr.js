import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import frLocale from "date-fns/locale/fr";
import { frFR as calFR } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const DateFieldFr = ({ label, fdate, date }) => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDateFns}
			adapterLocale={frLocale}
			localeText={
				calFR.components.MuiLocalizationProvider.defaultProps.localeText
			}
		>
			<DatePicker
				label={label}
				value={date}
				onChange={(newValue) => {
					fdate(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
				disableFuture
				variant="standard"
			/>
		</LocalizationProvider>
	);
};

export default DateFieldFr;
