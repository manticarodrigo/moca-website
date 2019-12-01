import React from 'react';

import { Flex } from 'design-system';

const MailchimpStatus = ({ status, message }) => (
  <Flex justifyContent="center" mt={2}>
    {status === 'sending' && <div style={{ color: '#143d6c' }}>Sending...</div>}
    {status === 'error' && (
      <div style={{ color: '#f53e3f' }} dangerouslySetInnerHTML={{ __html: message }} />
    )}
    {status === 'success' && <div style={{ color: '#819e3f' }}>Subscribed successfully!</div>}
  </Flex>
);

export default MailchimpStatus;
