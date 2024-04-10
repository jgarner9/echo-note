export default function loggedIn(route) {
  const user = localStorage.getItem("user");
  return user ? true : false;
}
