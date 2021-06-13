import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import Buttons from "./Buttons";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Examples from "./examples"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Buttons id='button' />
      </ThemeProvider>
    </div>
  );

}

export default App;
