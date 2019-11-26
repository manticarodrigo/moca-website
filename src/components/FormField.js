import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Box, Text, TextInput } from 'design-system';

const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
`;
const Placeholder = styled(Text)`
  position: absolute;
  color: #8BA5B9;
  transition: top 0.25s, left 0.25s, font-size 0.25s;
`;

const Input = styled(TextInput)`
  width: 100%;
  box-sizing: border-box;
  padding: 25px 20px 15px;
  margin-bottom: 15px;
  border-radius: 10.8px;
  border-width: 0px;
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  background-color: #f3f2f7;
  color: #485c7a;
`;

const FormField = ({ value, placeholder, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelStyle = {
    top: isFocused ? 5 : 20,
    left: isFocused ? 18 : 25,
    fontSize: isFocused ? 16 : 20,
    fontFamily: isFocused ? 'MuseoSansRounded-300' : 'MuseoSansRounded-500',
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Wrapper>
      <Placeholder style={labelStyle}>{placeholder}</Placeholder>
      <Input value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} />
    </Wrapper>
  );
};

export default FormField;
