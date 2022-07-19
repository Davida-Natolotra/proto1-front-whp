import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Logo-Ezaho.svg";
import { Link as Lk } from "react-router-dom";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: `url(${Logo})`,
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "70% auto",
						backgroundPosition: "center",
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography component="h1" variant="h5">
							Choisir vos programme
						</Typography>
						<Box component="form" sx={{ mt: 1 }}>
							<Button
								component={Lk}
								to="/whp"
								type="button"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								WHP
							</Button>
							<Button
								type="button"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								VIH SIDA
							</Button>
						</Box>
					</Box>
					<Copyright />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
