import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ContactsIcon from "@mui/icons-material/Contacts";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinDropIcon from "@mui/icons-material/PinDrop";
import BadgeIcon from "@mui/icons-material/Badge";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

import Logo from "../Logo-Ezaho.svg";
import DateField from "../components/DateFieldFr";
import TextInput from "../components/TextInput";

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
	const [date, setDate] = useState(null);
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
						<TextInput
							Icon={FacebookIcon}
							id="idFacebook"
							label="Nom facebook"
						/>
						<DateField label="Date de récolte" date={date} fdate={setDate} />
						<TextInput Icon={AccountCircle} id="Prenom" label="Prénom PAX" />
						<TextInput Icon={PinDropIcon} id="Lieu" label="Région" />
						<TextInput Icon={ContactsIcon} id="Adresse" label="Adresse PAX" />
						<TextInput Icon={AccountCircle} id="Nom Ref" label="Référent" />
						<TextInput Icon={PhoneIcon} id="contRef" label="Contact Référent" />
						<TextInput Icon={BadgeIcon} id="CIU" label="CIU" />

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
