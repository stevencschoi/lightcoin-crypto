class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // calculate the balance of transaction objects
    let balance = 0;
    for (let transaction of this.transactions) {
      // console.log(transaction);
      // console.log("this is the value: ", transaction.value);
      balance += transaction.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
};

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.account.balance + this.value <= 0) {
      console.log("Insufficient funds - please see a cashier.");
    } else {
      // Keep track of the time of the transaction
      this.time = new Date();
      // Add the transaction to the account
      this.account.addTransaction(this);
    }
  }
};

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
};

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
};

const myAccount = new Account("snow-patrol");
console.log('Starting Balance', myAccount.balance);

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();

const t3 = new Deposit(120.00, myAccount);
t3.commit();

console.log('Ending Balance:', myAccount.balance);
