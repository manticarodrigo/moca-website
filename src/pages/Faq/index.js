import React from 'react';

import CalendarScreenImage from 'assets/pngs/screenshot-calendar.png';
import ConversationScreenImage from 'assets/pngs/screenshot-conversation.png';
import HeroBgImage from 'assets/jpgs/map-bg.jpg';

import TwoColumnHero from 'components/TwoColumnHero';
import EmailForm from 'components/EmailForm';
import FaqList from 'components/Faq';

const heroTitle = (
  <>
    DOWNLOAD
    {' '}
    <span style={{ color: '#71cfeb' }}>MOCA</span>
  </>
);

const heroDescription = 'MOCA was created to meet the needs of providers and therapists, empowering both with time and capacity, ability to control their schedules, and aid in high-quality medical service at a convenient location.';


const Faq = () => (
  <>
    <TwoColumnHero
      bgImage={HeroBgImage}
      title={heroTitle}
      description={heroDescription}
      rightBackImage={CalendarScreenImage}
      rightFrontImage={ConversationScreenImage}
    />
    <FaqList />
    <FaqList alt />
    <EmailForm />
  </>
);

export default Faq;
