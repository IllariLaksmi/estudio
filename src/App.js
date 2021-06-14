import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import Buttons from "./Buttons";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import firebase from "firebase";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});



function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
            <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
      <ThemeProvider theme={theme}>
        <Buttons id='button' />
      </ThemeProvider>
    </div>
  );

}

export default App;
