export default async function loginController(e) {
  e.preventDefault();

  //destructuring to get separate username and password variables in one line
  const [username, password] = [
    e.target.username.value,
    e.target.password.value,
  ];

  const data = {
    username: username,
    password: password,
  };

  const loginRequest = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (loginRequest.status === 409) {
    document.getElementById("invalid-login-error").hidden = false;

    //select login button for invalid login animation
    const loginButtonElement = document.getElementById("login-button");

    //animate.css logic for invalid login animation
    loginButtonElement.style.setProperty("--animate-duration", "0.5s");
    loginButtonElement.classList.add("animate__animated", "animate__headShake");
    loginButtonElement.addEventListener("animationend", () => {
      loginButtonElement.style.removeProperty("--animate-duration");
      loginButtonElement.classList.remove(
        "animate__animated",
        "animate__headShake"
      );
    });
  } else {
    localStorage.setItem("username", await loginRequest.json());
    location.assign("/home");
  }
}
