import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import AccountCircle from "@mui/icons-material/AccountCircle";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
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
			<AppBar position="fix">
				<Toolbar>
					<CameraIcon sx={{ mr: 2 }} />
					<Typography variant="h6" color="inherit" noWrap>
						e-zaho facebook
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<Container maxWidth="sm">
					<br />
					<Typography variant="h5">Formulaire de recolte WHP</Typography>
					<Divider />
					<Stack direction="column" spacing={3}>
						<TextField id="nomFb" label="Nom Facebook" variant="standard" />

						<TextField id="Contact" label="Contact" variant="standard" />
						<TextField id="Adresse" label="Adresse" variant="standard" />
						<TextField
							id="Prenom"
							label="Prenom"
							variant="standard"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
						/>
						<TextField id="Lieu" label="Region" variant="standard" />
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
