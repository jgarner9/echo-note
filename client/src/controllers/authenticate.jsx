export default function authenticate(e) {
  e.preventDefault();

  const mockDb = {
    username: "jgarner",
    password: "peanuts",
  };

  //destructure form event children, to get values
  const [username, password] = [e.target.username.value, e.target.password.value];

  console.log(e.target.username.value)
  console.log(e.target.password.value)

  //logic to check mock credentials
  if (
    username === mockDb.username &&
    password === mockDb.password
  ) {
    localStorage.setItem("user", `${username.value},${password.value}`);
    location.reload();
  } else {
    document.getElementById("invalid-login-error").hidden = false;
  }
}
