// react
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

// material ui
// import CssBaseline from "@material-ui/core/CssBaseline"
// import { MuiThemeProvider } from "@material-ui/core/styles"
// import Grid from "@material-ui/core/Grid"

// components
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
// TODO import Store from "./pages/store";


function App() {

	return (
		<div>

			<BrowserRouter>
				<Switch>
					<Route path="/">
						<Home />
					</Route>

				</Switch>
			</BrowserRouter>
			<Footer />
		</div>


	)
}

export default App;
