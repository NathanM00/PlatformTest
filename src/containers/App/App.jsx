import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainDrawer from '../../components/MainDrawer/MainDrawer';
import MainContent from '../../components/MainContent/MainContent';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
          <CssBaseline />
          <MainDrawer/>
          <MainContent/>
      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
      paleRed: {
          main: '#ea3e3c',
      },
  },
});


export default App;