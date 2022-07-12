describe('Account', () => {
    test('should be the amount added to the balance', () => {
        // Given
        let account = new Account();

        // When
        account.deposit(42);

        // Then
        expect(account.balance).toEqual(42);
    })

    test('should be the amount removed to the balance', () => {
        // Given
        let account = new Account();

        // When
        account.withdraw(42);

        // Then
        expect(account.balance).toEqual(-42);
    })

    test('should have a history with all operations', () => {
        // Given
        let account = new Account();

        account.deposit(42);
        account.withdraw(20);
        account.withdraw(1.52);
        account.deposit(0.52);

        // When
        const history = account.history;

        // Then
        expect(history.length).toEqual(4);
        expect(history[0].operation).toEqual("deposit");
        expect(history[1].operation).toEqual("withdraw");
        expect(history[2].operation).toEqual("withdraw");
        expect(history[3].operation).toEqual("deposit");
        expect(typeof history[0].date).toEqual("number");
        expect(typeof history[1].date).toEqual("number");
        expect(typeof history[2].date).toEqual("number");
        expect(typeof history[3].date).toEqual("number");
        expect(history[0].amount).toEqual(42);
        expect(history[1].amount).toEqual(20);
        expect(history[2].amount).toEqual(1.52);
        expect(history[3].amount).toEqual(0.52);
        expect(history[0].balance).toEqual(42);
        expect(history[1].balance).toEqual(22);
        expect(history[2].balance).toEqual(20.48);
        expect(history[3].balance).toEqual(21);
    });
});