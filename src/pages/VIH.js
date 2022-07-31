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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import * as Yup from "yup";
import DateField from "../components/DateFieldFr";
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
	const [nomFb, setNomFb] = useState("");
	const [prenomPAX, setPrenomPAX] = useState("");
	const [CIU, setCIU] = useState("");
	const [date, setDate] = useState(null);
	const [inputRegion, setInputRegion] = useState("");
	const [sexe, setSexe] = useState("");
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
		inputRegion: Yup.string().required("Entrer la région du PAX"),
		date: Yup.string().required("Entrer date de saisie"),
		sexe: Yup.string().required("Entrer le sexe du PAX"),
		cible: Yup.string().required("Entrer le type cible du PAX"),
		referent: Yup.string().required("Entrer le référent du PAX"),
		pSensibilisation: Yup.string().required(
			"Entrer la page de sensibilisation du PAX"
		),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			nomFb: "",
			prenomPAX: "",
			CIU: "",
			date: "",
			inputRegion: "",
			sexe: "",
			cible: "",
			referent: "",
			pSensibilisation: "",
		},
		validationSchema: Schema,
		onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
			try {
				submit();
				reset();
			} catch (error) {
				console.error(error);
				setSubmitting(false);
				setErrors(error);
			}
		},
	});

	const reset = () => {
		setNomFb("");
		setPrenomPAX("");
		setCIU("");
		setDate(null);
		setInputRegion(null);
		setSexe(null);
		setCible("");
		setReferent("");
		setPSensibilisation(null);
		setReset(true);
	};

	const submit = () => {
		setReset(false);
		setAllergenes([
			...allergenes,
			{
				id,
				nomFb,
				prenomPAX,
				CIU,
				date,
				inputRegion,
				sexe,
				cible,
				referent,
				pSensibilisation,
			},
		]);
		setId(id + 1);

		reset();
	};

	const {
		errors,
		values,
		touched,
		handleSubmit,
		isSubmitting,
		setFieldValue,
		getFieldProps,
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
									<TextInput
										Icon={FacebookIcon}
										id="idFacebook"
										label="Nom facebook"
										required={true}
										value={nomFb}
										setValue={setNomFb}
										getFieldProps={getFieldProps}
										error={Boolean(touched.nomFb && errors.nomFb)}
										helperText={touched.nomFb && errors.nomFb}
									/>
									<SingleCheck
										setSexe={setSexe}
										sexe={sexe}
										error={Boolean(touched.sexe && errors.sexe)}
										helperText={touched.sexe && errors.sexe}
										getFieldProps={getFieldProps}
									/>
									<DateField
										label="Date de collecte"
										date={date}
										fdate={setDate}
										required={true}
										error={Boolean(touched.date && errors.date)}
										helperText={touched.date && errors.date}
										name="date"
									/>
									<TextInput
										Icon={AccountCircle}
										id="Prenom"
										label="Prénom PAX"
										required={true}
										value={prenomPAX}
										setValue={setPrenomPAX}
										error={Boolean(touched.prenomPAX && errors.prenomPAX)}
										helperText={touched.prenomPAX && errors.prenomPAX}
									/>
									<AutoComplete
										Icon={GpsFixedIcon}
										id="Cible"
										label="Type cible"
										inputValue={cible}
										setInputValue={setCible}
										data={cibles}
										freeSolo={true}
										required={true}
										referent={false}
										reset={isReset}
										error={Boolean(touched.cible && errors.cible)}
										helperText={touched.cible && errors.cible}
									/>
									<AutoComplete
										Icon={PinDropIcon}
										id="Lieu"
										label="Région"
										inputValue={inputRegion}
										setInputValue={setInputRegion}
										data={regions}
										freeSolo={false}
										required={true}
										referent={false}
										reset={isReset}
										error={Boolean(touched.inputRegion && errors.inputRegion)}
										helperText={touched.inputRegion && errors.inputRegion}
									/>
									<AutoComplete
										Icon={PinDropIcon}
										id="Referent"
										label="Référé à"
										inputValue={referent}
										setInputValue={setReferent}
										data={referents}
										freeSolo={true}
										required={true}
										referent={true}
										reset={isReset}
										error={Boolean(touched.referent && errors.referent)}
										helperText={touched.referent && errors.referent}
									/>
									<AutoComplete
										Icon={NewspaperIcon}
										id="pSensibilisation"
										label="Page de la sensibilisation"
										inputValue={pSensibilisation}
										setInputValue={setPSensibilisation}
										data={pagesSensibilisation}
										freeSolo={false}
										required={true}
										referent={false}
										reset={isReset}
										error={Boolean(
											touched.pSensibilisation && errors.pSensibilisation
										)}
										helperText={
											touched.pSensibilisation && errors.pSensibilisation
										}
									/>

									<TextInput
										Icon={BadgeIcon}
										id="CIU"
										label="CIU"
										value={CIU}
										setValue={setCIU}
									/>

									<Button
										variant="contained"
										color="primary"
										type="submit"
										onClick={handleSubmit}
									>
										Enregistrer
									</Button>
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
