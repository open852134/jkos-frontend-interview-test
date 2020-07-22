import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../";
import {
  InputContainer,
  Label,
  IconBlock,
  InputElement,
  InputGroupAppend
} from "../style";

const InputGroup = ({
  type,
  label,
  value,
  icon,
  onChange,
  appendClick,
  errorMessage
}) => {
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
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
        <InputGroupAppend appendClick={appendClick}>Forgot?</InputGroupAppend>
      </InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

InputGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defalutProps = {
  value: ""
};

export default InputGroup;
