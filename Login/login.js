logInBtn.addEventListener("click", logInFunction);

const logIn = [
  {
    email: "moinmaster@gmail.com",
    password: "123",
  },
  { email: "moinmaster@mail.com", password: "12345" },
  { email: "moin@mail.com", password: "12" },
  { email: "12", password: "12" },
];

function logInFunction() {
  const val = logIn.filter(
    (obj) => obj.email === email.value && obj.password === password.value
  );
  if (val.length) {
    logInLink.href = "../index.html";
    email.value = "";
    password.value = "";
  } else {
    alert("Bist du besoffen oder wat???");
    email.value = "";
    password.value = "";
  }
}
