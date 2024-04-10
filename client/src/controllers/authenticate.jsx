export default function authenticate(e) {
  e.preventDefault();
  const [username, password] = e.target.children;
  localStorage.setItem("user", `${username.value},${password.value}`);
  location.reload();
}
