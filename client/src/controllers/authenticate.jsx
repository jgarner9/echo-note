export default function authenticate(e) {
  e.preventDefault();

  //mockDb for credential flow, parses from a stored JSON string
  let mockDb = localStorage.getItem("users")
  mockDb === null ? mockDb = {} : mockDb = JSON.parse(mockDb)

  //destructuring to get separate username and password variables in one line
  const [username, password] = [
    e.target.username.value,
    e.target.password.value,
  ];

  //logic to check mock credentials
  if (mockDb[username] === password) {
    //if true, set localStorage item and reload the page for routing logic to redirect
    localStorage.setItem("user", `${username.value},${password.value}`);
    location.reload();
  } else {
    //if false, show the invalid error
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
  }
}
