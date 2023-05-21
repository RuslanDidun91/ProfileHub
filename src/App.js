import Nav from './components/Nav';
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import UsersPage from './pages/UsersPage';
import Search from './components/Search';
import CreateProfile from './pages/create-profile';
import EditProfile from './pages/edit-profile';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

  return (
    <>
      <Router>
        <Nav check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Search />
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route path="/new" component={CreateProfile} />
          <Route path="/edit/:id" component={EditProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

