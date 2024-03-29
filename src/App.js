import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from './design-system';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import PatientsPage from './pages/Patients';
import TherapistsPage from './pages/Therapists';
import FaqPage from './pages/Faq';
import HowItWorksPage from './pages/HowItWorks';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

const AppLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StickyContainer style={{ overflow: 'hidden' }}>
        <Navbar />
        {children}
      </StickyContainer>
    </BrowserRouter>
  </ThemeProvider>
);

const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/patients" component={PatientsPage} />
      <Route exact path="/therapists" component={TherapistsPage} />
      <Route exact path="/how-it-works" component={HowItWorksPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  </AppLayout>
);

export default App;
