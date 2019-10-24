import styled, { css } from 'styled-components/macro';
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
} from 'styled-system';

export default styled('div')`
    ${(props) => props.primary
    && css`
        color: ${() => props.theme.colors.primary};
      `} 

    ${(props) => props.secondary
    && css`
        color: ${() => props.theme.colors.secondaryLight};
      `}

    ${(props) => props.primaryDark
    && css`
        color: ${() => props.theme.colors.primaryDark};
      `}

      ${(props) => props.grey
    && css`
          color: ${() => props.theme.colors.grey};
        `}

        ${(props) => props.primaryLight
    && css`
            color: ${() => props.theme.colors.primaryLight};
          `}

    ${(props) => props.cardDescription
    && css`
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: center;
        color: #6a7e8f;
      `}

    ${(props) => props.headerTitle
    && css`
        font-family: MuseoSansRounded;
        font-size: 42px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #222d5f;
      `}

    ${(props) => props.headerDescription
    && css`
        font-family: MuseoSansRounded;
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: #143d6c;
      `}

    ${(props) => props.title
    && css`
        font-family: MuseoSansRounded;
        font-size: 44px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.23;
        letter-spacing: normal;
        text-align: center;
        color: #222d5f;
      `}

    ${(props) => props.secondaryCardTitle
    && css`
        font-family: MuseoSansRounded;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #71cfeb;
      `}


    ${(props) => props.secondaryCardDescription
    && css`
        font-family: MuseoSansRounded;
        font-size: 18px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #485c7a;
      `}

      ${(props) => props.cardTitle
    && css`
          font-family: MuseoSansRounded;
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #485c7a;
        `}

    ${(props) => props.cardHeader
    && css`
        font-family: MuseoSansRounded;
        font-size: 24px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #143d6c;
      `}
      ${space}
      ${color}
      ${layout}
      ${flexbox}
      ${typography}
      ${border}
  `;
