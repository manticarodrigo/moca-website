import styled from 'styled-components/macro';

import { Image } from 'design-system';

export default styled(Image)`
  max-width: ${({ contain }) => (contain ? '100%' : undefined)};
  object-fit: ${({ contain }) => (contain ? 'contain' : undefined)};
`;
