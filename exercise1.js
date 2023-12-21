const bankAccount = {
  ownerName: "Iryna",
  accountNumber: 123456789,
  balance: 7600,
  deposit(depositAmount) {
    depositAmount = prompt("Поповнити рахунок");
    this.balance += parseInt(depositAmount);
    return alert(`На рахунку залишилось ${this.balance}`);
  },
};

console.log(bankAccount.deposit());
