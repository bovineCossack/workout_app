import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './InputBox.styles';

const InputBox = ({ name, placeholder, label, initValue, handleChange }) => {
  const [value, setValue] = useState(initValue || '');

  const onChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <>
      <S.InputBox
        name={name}
        placeholder={placeholder}
        label={label}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

InputBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  initValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputBox;
