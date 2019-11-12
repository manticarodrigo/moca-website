import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from './design-system';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import TherapistPage from './pages/Therapist';
import AboutUsPage from './pages/AboutUs';

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
      <Route exact path="/" component={HomePage} />
      <Route exact path="/therapist" component={TherapistPage} />
      <Route exact path="/aboutus" component={AboutUsPage} />
    </Switch>
  </AppLayout>
);

export default App;
