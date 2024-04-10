export default function logOut(e) {
  e.preventDefault();
  localStorage.clear();
  location.reload();
}
