import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { Box, Text, TextInput } from 'design-system';

const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
`;
const Placeholder = styled(Text)`
  position: absolute;
  color: #8BA5B9;
  transition: top 0.25s, left 0.25s, font-size 0.25s;
  pointer-events: none;
`;

const Input = styled(TextInput)`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 20px 10px;
  margin-bottom: 15px;
  border-radius: 10.8px;
  border-width: 0px;
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  background-color: #f3f2f7;
  color: #485c7a;

  ${({ icon }) => icon && css`
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) center;
  `}

  ${({ shadow }) => shadow && css`
    box-shadow: 0 2px 2px 0 rgba(0, 42, 68, 0.5);
  `}
`;

const FormField = ({ value, placeholder, icon, width, shadow, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusedOrFilled = isFocused || !!value;

  const labelStyle = {
    top: focusedOrFilled ? 8 : 20,
    left: focusedOrFilled ? 18 : 25,
    fontSize: focusedOrFilled ? 16 : 20,
    fontFamily: focusedOrFilled ? 'MuseoSansRounded-300' : 'MuseoSansRounded-500',
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Wrapper width={width}>
      <Placeholder style={labelStyle}>{placeholder}</Placeholder>
      <Input
        value={value}
        icon={icon}
        shadow={shadow}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
};

export default FormField;
