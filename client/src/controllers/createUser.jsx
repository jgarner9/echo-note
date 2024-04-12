export default function createUser(e) {
  e.preventDefault();
  //extract form data, call for mockDb, compare, set localStorage or throw errors
  const [username, password, confirmation_password] = [
    e.target.username.value,
    e.target.password.value,
    e.target.confirmation_password.value,
  ];
  if (password !== confirmation_password) {
    console.log(
      `Passwords did not match: ${password} != ${confirmation_password}`
    );
    return "passwords_mismatch";
  } else {
    document.getElementById("passwords-mismatch-error").hidden = true;
    let mockDb = localStorage.getItem("users");
    mockDb === null ? (mockDb = {}) : (mockDb = JSON.parse(mockDb));

    //check for username
    if (mockDb[username] === undefined) {
      document.getElementById("username-taken-error").hidden = true;
      mockDb[username] = password;
      console.log(mockDb);
    } else {
      console.log(`${username} is already taken`);
      return "user_exists";
    }

    console.log(`mockDb: ${JSON.stringify(mockDb)}`);
    console.log(`username: ${username} password: ${password}`);

    localStorage.setItem("users", JSON.stringify(mockDb));
  }
}
