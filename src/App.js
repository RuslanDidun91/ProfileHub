import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import CssBaseline from '@mui/material/CssBaseline';
import UsersPage from './pages/UsersPage';


const App = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkModeToggle toggleColorMode={toggleColorMode} />
      <UsersPage />
    </ThemeProvider>
  );
};

export default App;

