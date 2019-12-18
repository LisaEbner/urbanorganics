

// react
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// material ui
// import CssBaseline from "@material-ui/core/CssBaseline"
// import { MuiThemeProvider } from "@material-ui/core/styles"
// import Grid from "@material-ui/core/Grid"

// components
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About"


function App() {

	const [currentPage, setCurrentPage] = useState("Home");

	function handlePageChange(page) {
		console.log(page)
		setCurrentPage(page)
	}

	// function renderPage() {
	// 	switch (currentPage) {
	// 		case "Home":
	// 			return <Home currentPage={currentPage}
	// 				handlePageChange={() => handlePageChange()} />;
	// 			break;
	// 		case "Store":
	// 			return <Store currentPage={currentPage}
	// 				handlePageChange={() => handlePageChange()} />
	// 			break;
	// 			case "About":
	// 				return <About currentPage={currentPage}
	// 					handlePageChange={() => handlePageChange()} />
	// 				break;
	// 		default:
	// 			return <Home currentPage={currentPage}
	// 				handlePageChange={() => handlePageChange} />;
	// 			break;
	// 	}
	// }


	return (
		<div>

		<Router>
			{/* <Navbar></Navbar> */}
			<Switch>
				<Route exact path='/' component={()=><Home handlePageChange={handlePageChange}/>}></Route>
				<Route exact path='/store' component={Store}></Route>
				<Route exact path='/about' component={About}></Route>
			</Switch>
		</Router>


{/* 
			{renderPage()} */}



			{/* <Footer /> */}
		</div>


	)

}

export default App;
