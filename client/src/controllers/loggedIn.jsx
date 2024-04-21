export default function loggedIn() {
  const user = localStorage.getItem("username")
  return user ? true : false;
}
