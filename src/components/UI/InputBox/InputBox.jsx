import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './InputBox.styles';

const InputBox = ({
  name,
  placeholder,
  label,
  type,
  handleChange,
  children,
}) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputBox
        name={name}
        placeholder={placeholder}
        value={value}
        // label={label}
        type={type}
        onChange={onChange}
      />
    </S.Container>
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
};

InputBox.defaultProps = {
  label: '',
  placeholder: '',
};

export default InputBox;
