import bcrypt from "bcryptjs";

export default async function createUser(e) {
  e.preventDefault();
  //extract form data, call for mockDb, compare, set localStorage or throw errors
  const [username, password, confirmPassword] = [
    e.target.username.value,
    e.target.password.value,
    e.target.confirmation_password.value,
  ];

  if (password === confirmPassword) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const data = {
      username: username,
      hashedPassword: hashedPassword,
    };
    console.log(data);
    const createUserRequest = await fetch("http://localhost:3000/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (createUserRequest.status === 409) {
      console.log(`${username} is already taken`);
      document.getElementById("username-taken-error").hidden = false;
      return;
    } else {
      location.assign("/login");
      return;
    }
  } else {
    console.log(`Passwords did not match: ${password} != ${confirmPassword}`);
    document.getElementById("passwords-mismatch-error").hidden = false;
    return;
  }
}
