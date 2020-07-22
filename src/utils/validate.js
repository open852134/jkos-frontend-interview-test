export const validate = {
  email: email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
      ? {
          isValid: true,
          errMsg: ""
        }
      : {
          isValid: false,
          errMsg: "Email is not valid"
        };
  },

  password: (email, password) => {
    if (password.length < 6)
      return {
        isValid: false,
        errMsg: "Password minimum length is 6"
      };

    for (let i = 0; i <= password.length - 6; i++) {
      const combination = password.substr(i, 6);
      if (email.includes(combination)) {
        return {
          isValid: false,
          errMsg: "Any 6 continuous character is the same as Email"
        };
      }
    }

    return {
      isValid: true,
      errMsg: ""
    };
  }
};
