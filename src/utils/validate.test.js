import { validate } from "./validate";

describe("validate email function", () => {
  test("email is not valid", () => {
    const email = "test.com.te";
    const { isValid } = validate.email(email);

    expect(isValid).toEqual(false);
  });

  test("email is valid", () => {
    const email = "test@test.com.te";
    const { isValid } = validate.email(email);

    expect(isValid).toEqual(true);
  });
});

describe("validate password function", () => {
  test("password [xxabc123wer] is not valid", () => {
    const email = "abc12345@mail.com";
    const password = "xxabc123wer";

    const { isValid } = validate.password(email, password);

    expect(isValid).toEqual(false);
  });

  test("password [c12345er12fda] is not valid", () => {
    const email = "abc12345@mail.com";
    const password = "c12345er12fda";

    const { isValid } = validate.password(email, password);

    expect(isValid).toEqual(false);
  });

  test("password [c124345ksfh] is valid", () => {
    const email = "abc12345@mail.com";
    const password = "c124345ksfh";

    const { isValid } = validate.password(email, password);

    expect(isValid).toEqual(true);
  });
});
