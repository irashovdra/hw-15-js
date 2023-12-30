const bankAccount = {
  ownerName: "Iryna",
  accountNumber: 123456789,
  balance: 7600,
  deposit() {
    const depositAmount = prompt("Поповнити рахунок");
    this.balance += parseInt(depositAmount);
    return alert(`Ваш рахунок складає ${this.balance}`);
  },
  withdraw() {
    const withdrawAmount = prompt("Скільки грошей бажаєте зняти?");
    this.balance -= parseInt(withdrawAmount);
    return alert(`Ваш рахунок складає ${this.balance}`);
  },
};

// console.log(bankAccount.deposit());
console.log(bankAccount.withdraw());
