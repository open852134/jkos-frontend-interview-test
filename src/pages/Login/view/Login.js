import React, { useState } from "react";
import { validate } from "../../../utils/validate";
import { role } from "../../../const";
import {
  Popup,
  Input,
  Button,
  Highlight,
  InputGroup,
  UserRoleCard
} from "../../../components";
import {
  FormBlock,
  PopupContent,
  PageContainer,
  TipsInfoBlock,
  OperationBlock,
  SignupTipBlock,
  AccountTypeSection
} from "../style";

const initialForm = {
  email: "",
  password: ""
};
const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [accountRole, setAccountRole] = useState(role.DOCTOR);
  const [errorMessage, setErrorMessage] = useState(initialForm);
  const [formData, setFormData] = useState(initialForm);

  const login = () => {
    const { isValid: emailIsValid, errMsg: emailErrMsg } = validate.email(
      formData.email
    );
    const {
      isValid: passwordIsValid,
      errMsg: passwordErrMsg
    } = validate.password(formData.email, formData.password);

    setErrorMessage({
      email: (!emailIsValid && emailErrMsg) || "",
      password: (!passwordIsValid && passwordErrMsg) || ""
    });

    if (emailIsValid && passwordIsValid) {
      setIsLoginSuccess(true);
    }
  };

  const close = () => {
    setIsLoginSuccess(false);
    setErrorMessage(initialForm);
    setFormData(initialForm);
  };

  return (
    <>
      <PageContainer>
        <AccountTypeSection>
          <UserRoleCard
            accountRole={role.DOCTOR}
            isSelected={accountRole === role.DOCTOR}
            onClick={() => setAccountRole(role.DOCTOR)}
          />
          <UserRoleCard
            accountRole={role.PATIENT}
            isSelected={accountRole === role.PATIENT}
            onClick={() => setAccountRole(role.PATIENT)}
          />
        </AccountTypeSection>

        <div>
          <TipsInfoBlock>
            <p>Hello {accountRole}!</p>
            <p> Pleace fill out the form below to get started.</p>
          </TipsInfoBlock>

          <FormBlock>
            <Input
              label="Email"
              type="text"
              value={formData.email}
              errorMessage={errorMessage.email}
              icon={<i className="far fa-envelope" />}
              onChange={e =>
                setFormData({
                  ...formData,
                  email: e.target.value.replace(/\s/g, "")
                })
              }
            />

            <InputGroup
              label="Password"
              type="password"
              value={formData.password}
              errorMessage={errorMessage.password}
              icon={<i className="fas fa-lock" />}
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormBlock>

          <OperationBlock>
            <SignupTipBlock>
              No accout? <Highlight>Sign up</Highlight>
            </SignupTipBlock>
            <Button onClick={login}>Login</Button>
          </OperationBlock>
        </div>
      </PageContainer>

      {isLoginSuccess && (
        <Popup>
          <PopupContent>
            <img src="https://bit.ly/3hrREgy" alt="Check Icon" width="80px" />
            <Button onClick={close}>Close</Button>
          </PopupContent>
        </Popup>
      )}
    </>
  );
};

export default Login;
