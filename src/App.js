import React from "react";
import Whp from "./pages/Whp";
import SignIn from "./pages/Signing";
import Home from "./pages/Home";
import Vih from "./pages/VIH";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/signing" element={<SignIn />} />
			<Route path="/whp" element={<Whp />} />
			<Route path="/vih" element={<Vih />} />
		</Routes>
	);
};

export default App;
