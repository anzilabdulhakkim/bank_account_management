function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
    } 
    else {
        console.log('Invalid deposit amount');
    }
};
  
BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
    } 
    else {
      console.log('Invalid withdrawal amount or insufficient amount');
    }
};
  
BankAccount.prototype.checkBalance = function() {
    console.log(`Balance of ${this.name}'s account: ${this.balance}`);
};
  
BankAccount.prototype.isActive = function() {
    return this.active;
};
  

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}
  

const account1 = new BankAccount(12345, 'Sachin', 'Savings', 1000);
const account2 = new BankAccount(67890, 'Dhoni', 'Checking', 700);
  
account1.deposit(500);
account1.withdraw(300);
account1.checkBalance();
  
account2.deposit(200);
account2.withdraw(500);
account2.checkBalance();
  

console.log(`${account1.name}'s account is active: ${account1.isActive()}`);
console.log(`${account2.name}'s account is active: ${account2.isActive()}`);
  
 
let allAccounts = [account1, account2];
let totalBalance = getTotalBalance(allAccounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
  