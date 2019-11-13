import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from './design-system';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import PatientPage from './pages/Patient';
import FaqPage from './pages/Faq';
import HowItWorksPage from './pages/HowItWorks';
import TherapistPage from './pages/Therapist';
import AboutUsPage from './pages/AboutUs';
import ContactUs from './pages/Home/ContactUs';

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
      <Route exact path="/patient" component={PatientPage} />
      <Route exact path="/therapist" component={TherapistPage} />
      <Route exact path="/howitworks" component={HowItWorksPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/aboutus" component={AboutUsPage} />
    </Switch>
  </AppLayout>
);

export default App;
