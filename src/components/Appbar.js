import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Logo from "../Logo-Ezaho.svg";
import { Link as Lk } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";

export default function MenuAppBar(props) {
	return (
		<ElevationScroll {...props}>
			<AppBar color="inherit">
				<Toolbar>
					<img
						src={Logo}
						alt="logo"
						style={{ height: "100%", maxWidth: 100, marginRight: 10 }}
					/>

					<Typography variant="h6" color="primary" noWrap>
						facebook
					</Typography>

					<Box sx={{ flexGrow: 1, ml: 3 }}>
						<Tooltip title="Accueil">
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								LinkComponent={Lk}
								color="inherit"
								to="/"
							>
								<HomeIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};
