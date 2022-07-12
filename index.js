module.exports = class Account {
    _balance;
    _history;

    constructor() {
        this._balance = 0.0;
        this._history = [];
    }

    get balance() {
        return this._balance;
    }

    get history() {
        return this._history;
    }

    deposit(value) {
        this._balance += parseFloat(value);
        this._history.push({
            date: Date.now(),
            operation: "deposit",
            amount: value,
            balance: this._balance
        });

        return this._balance;
    }

    withdraw(value) {
        this._balance -= parseFloat(value);
        this._history.push({
            date: Date.now(),
            operation: "withdraw",
            amount: value,
            balance: this._balance
        });

        return this._balance;
    }
}