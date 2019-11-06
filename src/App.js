import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from './design-system';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import TherapistPage from './pages/Therapist';
import AboutUsPage from './pages/AboutUs';
import HomeScreen from './pages/Home';

const AppLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        {children}
      </BrowserRouter>
    </ThemeProvider>
  </>
);

const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/" component={AboutUsPage} />
      {/* <Route exact path="/patient" component={HomeScreen} />
      <Route exact path="/therapist" component={HomeScreen} />
      <Route exact path="/howitworks" component={HomeScreen} />
      <Route exact path="/contact" component={HomeScreen} />
      <Route exact path="/aboutus" component={HomeScreen} /> */}
    </Switch>
  </AppLayout>
);

export default App;
