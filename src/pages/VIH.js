import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import ContactsIcon from "@mui/icons-material/Contacts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinDropIcon from "@mui/icons-material/PinDrop";
import BadgeIcon from "@mui/icons-material/Badge";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

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
			</Link>
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
	const [id, setId] = useState(null);

	const reset = () => {
		setNomFb("");
		setPrenomPAX("");
		setCIU("");
		setDate(null);
		setInputRegion("");
		setSexe("");
		setCible("");
		setReferent("");
		setPSensibilisation("");
	};

	const submit = () => {
		if (id === null) {
			setId(0);
			setAllergenes([
				{
					id: 0,
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
		} else {
			setId(id + 1);
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
		}

		reset();
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar />
			<Box sx={{ my: 10, pr: 12 }}>
				<Grid container spacing={3} sx={{ m: 3 }}>
					<Grid item xs={12} sm={4}>
						<Typography variant="h5">Formulaire de récolte VIH</Typography>
						<Divider />
						<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
							<TextInput
								Icon={FacebookIcon}
								id="idFacebook"
								label="Nom facebook"
								required={true}
								value={nomFb}
								setValue={setNomFb}
							/>
							<SingleCheck setSexe={setSexe} />
							<DateField
								label="Date de collecte"
								date={date}
								fdate={setDate}
								required={true}
							/>
							<TextInput
								Icon={AccountCircle}
								id="Prenom"
								label="Prénom PAX"
								required={true}
								value={prenomPAX}
								setValue={setPrenomPAX}
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
							/>

							<TextInput
								Icon={BadgeIcon}
								id="CIU"
								label="CIU"
								value={CIU}
								setValue={setCIU}
							/>

							<Button variant="contained" color="primary" onClick={submit}>
								Enregistrer
							</Button>
						</Stack>
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
