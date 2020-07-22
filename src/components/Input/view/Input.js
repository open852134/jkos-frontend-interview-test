import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../";
import { Label, IconBlock, InputElement, InputContainer } from "../style";

const Input = ({ type, label, value, onChange, icon, errorMessage }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isShowLabel, setIsShowLabel] = useState(false);

  useEffect(() => {
    setIsShowLabel(!!value);
  }, [value]);

  return (
    <div>
      <InputContainer isFocus={isFocus}>
        <IconBlock isFocus={isFocus}>{icon}</IconBlock>
        <Label isFocus={isFocus} isShowLabel={isShowLabel}>
          {label}
        </Label>
        <InputElement
          tpye={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
      </InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Input.defalutProps = {
  value: ""
};

export default Input;
