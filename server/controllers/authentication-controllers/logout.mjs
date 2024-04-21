export default async function logout(req, res) {
  res.clearCookie("jwt");
  res.status(204).json({ message: "You have been logged out" });
}
