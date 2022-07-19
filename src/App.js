import React from "react";
import Whp from "./pages/Whp";
import SignIn from "./pages/Signing";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signing" element={<SignIn />} />
			<Route path="/whp" element={<Whp />} />
		</Routes>
	);
};

export default App;
