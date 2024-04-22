import bcrypt from "bcryptjs";

export default async function createUser(e) {
  e.preventDefault();

  const passwordTooShortError = document.getElementById(
    "password-too-short-error"
  );
  const usernameTakenError = document.getElementById("username-taken-error");
  const passwordsMismatchError = document.getElementById(
    "passwords-mismatch-error"
  );

  usernameTakenError.hidden = true;

  //extract form data, call for mockDb, compare, set localStorage or throw errors
  const [username, password, confirmPassword] = [
    e.target.username.value,
    e.target.password.value,
    e.target.confirmation_password.value,
  ];

  if (password.length < 5) {
    passwordTooShortError.hidden = false;
    return;
  } else {
    passwordTooShortError.hidden = true;
  }
  if (password === confirmPassword) {
    passwordsMismatchError.hidden = true;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const data = {
      username: username,
      hashedPassword: hashedPassword,
    };

    const createUserRequest = await fetch(
      "http://localhost:3000/auth/create-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (createUserRequest.status === 409) {
      console.log(`${username} is already taken`);
      usernameTakenError.hidden = false;
      return;
    } else {
      location.assign("/login");
      return;
    }
  } else {
    console.log(`Passwords did not match: ${password} != ${confirmPassword}`);
    passwordsMismatchError.hidden = false;
    return;
  }
}
