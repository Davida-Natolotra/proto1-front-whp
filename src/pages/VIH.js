import { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import Button from "@mui/material/Button";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinDropIcon from "@mui/icons-material/PinDrop";
import BadgeIcon from "@mui/icons-material/Badge";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { TextFields } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import frLocale from "date-fns/locale/fr";
import { frFR as calFR } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as Yup from "yup";
import FormHelperText from "@mui/material/FormHelperText";
import TextInput from "../components/TextInput";
import AppBar from "../components/Appbar";
import SingleCheck from "../components/SingleCheck";
import AutoComplete from "../components/Autocomplete";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { regions } from "../api/regions";
import { cibles } from "../api/cibles";
import { referents } from "../api/referents";
import { pagesSensibilisation } from "../api/pagesSensibilisation";
// import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import DataGrid from "../components/DataGrid";
import DateFieldFr from "../components/DateFieldFr";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://e-zaho.mg/">
				e-zaho
			</Link>{" "}
			{new Date().getFullYear()}
		</Typography>
	);
}

const theme = createTheme();

export default function Formulaire() {
	const [inputRegion, setInputRegion] = useState("");
	const [cible, setCible] = useState("");
	const [referent, setReferent] = useState("");
	const [pSensibilisation, setPSensibilisation] = useState("");
	const [allergenes, setAllergenes] = useState([]);
	const [id, setId] = useState(0);
	const [isReset, setReset] = useState(false);

	const Schema = Yup.object().shape({
		nomFb: Yup.string().required("Entrer le nom FB du PAX"),
		prenomPAX: Yup.string().required("Entrer le prénom du PAX"),
		CIU: Yup.string().required("Entrer le CIU du PAX"),
		date: Yup.date().required("Entrer date de saisie"),
		// inputRegion: Yup.string().required("Entrer la région du PAX"),
		sexe: Yup.string().required("Entrer le sexe du PAX"),
		// cible: Yup.string().required("Entrer le type cible du PAX"),
		// referent: Yup.string().required("Entrer le référent du PAX"),
		// pSensibilisation: Yup.string().required(
		// 	"Entrer la page de sensibilisation du PAX"
		// ),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			nomFb: "",
			prenomPAX: "",
			CIU: "",
			date: null,
			// inputRegion: "",
			sexe: "",
			// cible: "",
			// referent: "",
			// pSensibilisation: "",
		},
		validationSchema: Schema,
		onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
			try {
				submit(values);
				resetForm();
			} catch (error) {
				console.error(error);
				setSubmitting(false);
				setErrors(error);
			}
		},
	});

	const submit = (values) => {
		setAllergenes([...allergenes, { id, ...values }]);
		setId(id + 1);
	};

	const {
		handleChange,
		values,
		handleSubmit,
		touched,
		handleBlur,
		errors,
		resetForm,
		setFieldValue,
	} = formik;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar />
			<Box sx={{ my: 10, pr: 12 }}>
				<Grid container spacing={3} sx={{ m: 3 }}>
					<Grid item xs={12} sm={4}>
						<Typography variant="h5">Formulaire de récolte VIH</Typography>
						<Divider />
						<FormikProvider value={formik}>
							<Form autoComplete="off" onSubmit={handleSubmit}>
								<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
									<TextField
										label="Nom Facebook"
										value={values.nomFb}
										onChange={handleChange}
										onBlur={handleBlur}
										name="nomFb"
										variant="standard"
										error={Boolean(touched.nomFb && errors.nomFb)}
										helperText={touched.nomFb && errors.nomFb}
									/>
									<TextField
										label="Prénom PAX"
										value={values.prenomPAX}
										onChange={handleChange}
										onBlur={handleBlur}
										name="prenomPAX"
										variant="standard"
										error={Boolean(touched.prenomPAX && errors.prenomPAX)}
										helperText={touched.prenomPAX && errors.prenomPAX}
									/>
									<LocalizationProvider
										dateAdapter={AdapterDateFns}
										adapterLocale={frLocale}
										localeText={
											calFR.components.MuiLocalizationProvider.defaultProps
												.localeText
										}
									>
										<MobileDatePicker
											label="Date de collecte"
											value={values.date}
											onChange={(newValue) => {
												setFieldValue("date", newValue);
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													name="date"
													variant="standard"
													error={Boolean(touched.date && errors.date)}
													helperText={touched.date && errors.date}
												/>
											)}
											disableFuture
											variant="standard"
										/>
									</LocalizationProvider>
									<FormControl error={Boolean(touched.sexe && errors.sexe)}>
										<FormLabel id="demo-row-radio-buttons-group-label">
											Sexe
										</FormLabel>
										<RadioGroup
											row
											aria-labelledby="demo-row-radio-buttons-group-label"
											name="sexe"
											value={values.sexe}
											onChange={handleChange}
										>
											<FormControlLabel
												value="feminin"
												control={<Radio />}
												label="Feminin"
											/>
											<FormControlLabel
												value="masculin"
												control={<Radio />}
												label="Masculin"
											/>
										</RadioGroup>
										<FormHelperText>
											{touched.sexe && errors.sexe}
										</FormHelperText>
									</FormControl>
									<Stack direction="row" spacing={2}>
										<Button
											variant="contained"
											color="primary"
											type="submit"
											onClick={handleSubmit}
										>
											Enregistrer
										</Button>
										<Button
											variant="outlined"
											type="button"
											onClick={() => resetForm()}
										>
											Annuler
										</Button>
									</Stack>
								</Stack>
							</Form>
						</FormikProvider>
					</Grid>
					<Grid item xs={12} sm={8}>
						<DataGrid rows={allergenes} />
					</Grid>
				</Grid>
			</Box>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					E-Zaho Facebook
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Tout droits réservés.
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
