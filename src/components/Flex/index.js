import styled, { css } from "styled-components";
import HeaderImage from "../../assets/map.png";
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border
} from "styled-system";

export default styled("div")`
  display: flex;
  
    ${props =>
      props.card &&
      css`
        box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
        border-radius: 10px;
        background-color: #ffffff;
        min-height: 300px;
        min-width: 200px;
        width: 250px;
      `}
    ${props =>
      props.secandaryCard &&
      css`
        min-height: 166px;
        height: 150px;
        width: 500px;
        min-width: 200px;
        border-radius: 10px;
        box-shadow: 0 4px 15px 0 rgba(187, 228, 242, 0.4);
        border: solid 2px #bbe4f2;
        background-color: #ffffff;
      `}
    ${props =>
      props.headerBackground &&
      css`
        background-image: url(${HeaderImage});
      `}
    ${space} ${color} ${layout} ${flexbox} ${typography} ${border};
`;
