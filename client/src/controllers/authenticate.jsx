export default function authenticate(e) {
  e.preventDefault();

  //mockDb for credential flow
  const mockDb = {
    username: "jgarner",
    password: "peanuts",
  };

  //destructuring to get separate username and password variables in one line
  const [username, password] = [
    e.target.username.value,
    e.target.password.value,
  ];

  //logic to check mock credentials
  if (username === mockDb.username && password === mockDb.password) {
    //if true, set localStorage item and reload the page for routing logic to redirect
    localStorage.setItem("user", `${username.value},${password.value}`);
    location.reload();
  } else {
    //if false, show the invalid error
    document.getElementById("invalid-login-error").hidden = false;
    const usernameElement = document.getElementById("username-input");
    const passwordElement = document.getElementById("password-input");
    const loginButtonElement = document.getElementById("login-button");

    loginButtonElement.style.setProperty("--animate-duration", "0.5s");
    loginButtonElement.classList.add("animate__animated", "animate__headShake");
    loginButtonElement.addEventListener("animationend", () => {
      loginButtonElement.style.removeProperty("--animate-duration");
      loginButtonElement.classList.remove(
        "animate__animated",
        "animate__headShake"
      );
    });

    // //set animation properties and add classes
    // usernameElement.style.setProperty("--animate-duration", "0.5s");
    // passwordElement.style.setProperty("--animate-duration", "0.5s");
    // usernameElement.classList.add("animate__animated", "animate__headShake");
    // passwordElement.classList.add("animate__animated", "animate__headShake");

    // usernameElement.addEventListener("animationend", () => {
    //   usernameElement.style.removeProperty("--animate-duration");
    //   usernameElement.classList.remove(
    //     "animate__animated",
    //     "animate__headShake"
    //   );
    // });
    // passwordElement.addEventListener("animationend", () => {
    //   passwordElement.style.removeProperty("--animate-duration");
    //   passwordElement.classList.remove(
    //     "animate__animated",
    //     "animate__headShake"
    //   );
    // });
  }
}
