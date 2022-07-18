import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ContactsIcon from "@mui/icons-material/Contacts";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinDropIcon from "@mui/icons-material/PinDrop";
import BadgeIcon from "@mui/icons-material/Badge";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
	Paper,
	TextField,
	Divider,
	InputAdornment,
	DateField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccountCircle from "@mui/icons-material/AccountCircle";
import frLocale from "date-fns/locale/fr";
import { frFR as calFR } from "@mui/x-date-pickers";
import Logo from "./Logo-Ezaho.svg";

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
	const [date, setDate] = useState(new Date());
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="sticky" color="inherit">
				<Toolbar>
					<img
						src={Logo}
						alt="logo"
						style={{ height: "100%", maxWidth: 100, marginRight: 10 }}
					/>
					<Typography variant="h6" color="primary" noWrap>
						facebook
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<Container maxWidth="sm">
					<br />
					<Typography variant="h5">Formulaire de récolte WHP</Typography>
					<Divider />
					<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
						<Box sx={{ display: "flex", alignItems: "flex-end" }}>
							<FacebookIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
							<TextField
								id="nomFb"
								label="Nom Facebook"
								variant="standard"
								sx={{ width: "100%" }}
							/>
						</Box>

						<LocalizationProvider
							dateAdapter={AdapterDateFns}
							adapterLocale={frLocale}
							localeText={
								calFR.components.MuiLocalizationProvider.defaultProps.localeText
							}
						>
							<DatePicker
								label="Date de récolte"
								value={date}
								onChange={(newValue) => {
									setDate(newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
						<TextField
							id="Prenom"
							label="Prénom PAX"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							id="Lieu"
							label="Région"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PinDropIcon />
									</InputAdornment>
								),
							}}
						/>

						<TextField
							id="Adresse"
							label="Adresse PAX"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<ContactsIcon />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							id="Nom Ref"
							label="Référent"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							id="contRef"
							label="Contact Référent"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PhoneIcon />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							id="CIU"
							label="CIU"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<BadgeIcon />
									</InputAdornment>
								),
							}}
						/>

						<Button variant="contained" color="primary">
							Enregistrer
						</Button>
					</Stack>
				</Container>
			</main>
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
