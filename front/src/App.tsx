import React from 'react';
import Home from './components/Home';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'; // Para Material UI Joy
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Para Material UI tradicional
import { grey } from '@mui/material/colors';
import './App.css';

function App() {
  const joyTheme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          background: {
            body: grey[900], 
          },
          text: {
            primary: grey[800], 
          },
        },
      },
    },
  });
  
  const materialTheme = createTheme({
    palette: {
      background: {
        default: grey[50], 
      },
      text: {
        primary: grey[800],
      },
    },
  });

  return (
 <>
    <CssVarsProvider theme={joyTheme}>
      <ThemeProvider theme={materialTheme}> 
      <Home />
        
      </ThemeProvider>
    </CssVarsProvider>

 </>
  );
}

export default App;
