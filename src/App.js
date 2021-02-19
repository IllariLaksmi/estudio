import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Description from './components/Description';
import Buttons from './components/Buttons';
import DateTime from './components/DateTime';
import UploadButtons from './components/UploadButtons';
import NameInput from './components/NameInput';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat', 'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <div className='App'>
          <ThemeProvider theme={theme}>
      
      <NavBar />
      <div className='Main'>
            <h2>¿Te gustaría participar en un estudio donde puedas compartir tus experiencias como inmigrante peruana?</h2>
            <Description />
          </div>
        <div className='Form'>
            <h3>Formulario de inscripción</h3>
            <NameInput/>
            <Buttons/>
            <DateTime/>
            <UploadButtons/>
          </div>
        </ThemeProvider>
    </div>
    

  );
}

export default App;
