import Nav from './components/Nav/Nav';
import { useState } from "react";
import Main from './pages/Main';
import { Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css';
import UserList from './components/test';


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
        <div className="App">
          <Nav check={darkMode} change={() => setDarkMode(!darkMode)} />
          <h1>Dark Mode</h1>
          <Nav />
          <Main />
          <UserList />

        </div>
      </Paper>
    </ThemeProvider>

  );
}

export default App;
