import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DarkModeToggle from './components/DarkModeToggle';
import UsersPage from './pages/UsersPage';
import CssBaseline from '@mui/material/CssBaseline';


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
      {/* <Nav /> */}
      <UsersPage />
    </ThemeProvider>
  );
};

export default App;


// import Nav from './components/Nav';
// import { useState } from "react";
// import { createTheme, ThemeProvider } from '@material-ui/core/styles'
// import './App.css';
// import UsersPage from './pages/UsersPage';

// function App() {

//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       type: darkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <>
//     <ThemeProvider theme={theme}>
//         <Nav check={darkMode} change={() => setDarkMode(!darkMode)} />
//           <UsersPage />
//     </ThemeProvider>
//     </>
//   );
// }

// export default App;
