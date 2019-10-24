import React from 'react';

import { Route, Switch, BrowserRouter} from "react-router-dom";
import { theme } from "./design-system";
import { ThemeProvider } from "styled-components";

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';

const AppLayout = ({ children }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
        {children}
      </BrowserRouter>
    </ThemeProvider>  
  </React.Fragment>
)

const App = ()  => {
  return (
    <AppLayout>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/patient" component={HomeScreen} />
        <Route exact path="/therapist" component={HomeScreen} />
        <Route exact path="/howitworks" component={HomeScreen} />
        <Route exact path="/contact" component={HomeScreen} />
        <Route exact path="/aboutus" component={HomeScreen} />
      </Switch>
  </AppLayout>
  );
}

export default App;
