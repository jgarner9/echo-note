export default async function logOut(e) {
  e.preventDefault();

  const logoutRequest = await fetch("http://localhost:3000/auth/logout");
  if (logoutRequest.status === 204) localStorage.clear();
  location.assign("/login");
}
