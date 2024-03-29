import styled from 'styled-components/macro';
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  position,
} from 'styled-system';

export const Box = styled('div')(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  position,
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Image = styled('img')({
  space,
  layout,
});

export const Text = styled('div')(
  typography,
  space,
  color,
);

export const TextInput = styled('input')(
  typography,
  space,
  color,
  layout,
);

export const Button = styled('button')(
  typography,
  space,
  color,
);

export const HyperLink = styled('a')(
  typography,
  space,
  color,
);
