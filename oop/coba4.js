// Latihan 3: Constructor Function dengan Properti Private
// Buatlah constructor function BankAccount dengan properti balance yang diset ke 0 secara default.
// Tambahkan method deposit yang menerima parameter amount dan menambahkan jumlah tersebut ke balance.
// Tambahkan method withdraw yang menerima parameter amount dan mengurangi balance jika jumlah tersebut
// cukup, jika tidak cukup maka cetak "Insufficient funds".


function BankAccount(balance = 0) {
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount ;
    console.log(`Deposited : ${amount}, Current Balance : ${this.balance}`)
}

BankAccount.prototype.withdraw = function (amount) {
    if(this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdraw : ${amount}, Remaining balance : ${this.balance}`)
    } else {
        console.log(`Insufficient funds`);
    }
}


const account = new BankAccount ();
account.deposit(2000);
account.withdraw(50000);
account.withdraw(100);
account.deposit(0);
