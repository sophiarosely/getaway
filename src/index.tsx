import App from "./App";
import { createRoot } from 'react-dom/client';
import  './styles.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';

const mainTheme = createTheme({
  palette:{
    primary:{
      main: '#FFFFFF'
    },
    secondary:{
      main: '#CCD7FF'
    },
    background: {
      default: 'rgb(120, 138, 202)',
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  typography:{
    fontFamily: 'Carme',

  }
});



const domNode: any = document.getElementById('root');
const root = createRoot(domNode);
root.render(<ThemeProvider theme={mainTheme}><CssBaseline /><App /></ThemeProvider>);
