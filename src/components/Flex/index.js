import styled, { css } from 'styled-components/macro';
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
} from 'styled-system';
import HeaderImage from 'assets/map.png';

export default styled('div')`
  display: flex;
  
    ${(props) => props.secandaryCard
      && css`
        min-height: 166px;
        height: 150px;
        width: 500px;
        min-width: 200px;
        border-radius: 10px;
        box-shadow: 0 4px 15px 0 rgba(187, 228, 242, 0.4);
        border: solid 2px #bbe4f2;
        background-color: #ffffff;
      `}
    ${(props) => props.headerBackground
      && css`
        background-image: url(${HeaderImage});
      `}
    ${space} ${color} ${layout} ${flexbox} ${typography} ${border};
`;
