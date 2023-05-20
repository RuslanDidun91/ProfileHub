import Nav from './components/Nav';
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css';
import UserPage from './pages/UsersPage';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "250vh" }}>
          <Nav check={darkMode} change={() => setDarkMode(!darkMode)} />
          <UserPage />
      </Paper>
    </ThemeProvider>

  );
}

export default App;
