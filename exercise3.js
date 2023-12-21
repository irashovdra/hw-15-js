const email = "ishovdra4@gmail.com";
const password = "Apple123";

const user = {
  name: "Iryna",
  email: prompt("Enter your email"),
  password: prompt("Enter your password"),
  login() {
    if (email === this.email && password === this.password) {
      return alert("Ви зареєтсровані");
    } else {
      return alert("Перевірте ваш email чи password ще раз");
    }
  },
};

console.log(user.login());
