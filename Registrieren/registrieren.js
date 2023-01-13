const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button-style");
let userOne = userName.value;
let passwordOne = password.value;

// function addUser() {
//   const user = {
//     email: userName.value,
//     password: password.value,
//   };
//   console.log(user());
// }

button.addEventListener("click", create);

async function create(userOne, passwordOne) {
  const response = await fetch(
    "https://miniprojectedevgeah-default-rtdb.firebaseio.com/login.json",
    {
      method: "POST",
      body: JSON.stringify({
        email: userOne,
        password: passwordOne,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
}
