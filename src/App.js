import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    palette:{
      primary: {
        main:""
      },
      secondary: {
        main:""
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
