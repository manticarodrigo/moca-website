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

export const Text = styled('div')({
  fontSize: '24px',
  fontWeight: '900',
},
typography,
space,
color);

export const TextInput = styled('input')(
  typography,
  space,
  color,
);

export const Button = styled('button')(
  typography,
  space,
  color,
);
