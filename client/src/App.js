import React from 'react';
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import CreateUser from "./components/CreateUser";
import {BrowserRouter, Switch,Route} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import {MuiThemeProvider} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

function App() {
  return (
	  <MuiThemeProvider>
	    <CssBaseline/>
		  <Grid alignItems="center" container justify="space-between">
	  <Grid item xs={12}>
	    <BrowserRouter>
		  <Switch>
		      <Route path="/create-user" component={CreateUser}/>
		      <Route path="/about" component={About}/>
		      <Route component={Home}/>
		  </Switch>
	    </BrowserRouter>
	      <Footer />
	  </Grid>
	  </Grid>
	  </MuiThemeProvider>

  );
}

export default App;
