import './App.css';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainDrawer from '../../components/MainDrawer/MainDrawer';
import MainContent from '../../components/MainContent/MainContent';
import MainSearchBar from '../../components/MainSearchBar/MainSearchBar';

function App() {

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerToggle = (value) => {
    setOpenDrawer(value);
  };

  return (
    <ThemeProvider theme={theme}>

      <div className="App">
          <CssBaseline />
          <MainSearchBar onClick={handleDrawerToggle}/>
        <div className="App_container">
          <MainDrawer  onClick={handleDrawerToggle} open={openDrawer}/>
          <MainContent/>
        </div>
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