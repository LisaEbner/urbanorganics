

// react
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

// material ui
// import CssBaseline from "@material-ui/core/CssBaseline"
// import { MuiThemeProvider } from "@material-ui/core/styles"
// import Grid from "@material-ui/core/Grid"

// components
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Store from "./pages/Store";


function App() {

	const [currentPage, setCurrentPage] = useState("Home");

	function handlePageChange(page) {
		setCurrentPage(page)
	}

	function renderPage() {
		switch (currentPage) {
			case "Home":
				return <Home currentPage={currentPage}
					handlePageChange={() => handlePageChange("Store")} />;
				break;
			case "Store":
				return <Store currentPage={currentPage}
					handlePageChange={() => handlePageChange("Home")} />
				break;

			default:
				return <Home currentPage={currentPage}
					handlePageChange={() => handlePageChange("Store")} />;
				break;
		}
	}


	return (
		<div>





			{renderPage()}



			{/* <Footer /> */}
		</div>


	)

}

export default App;
