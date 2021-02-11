class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;

    }
    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data["rates"][this.secondCurrency];

                    const amountNumber = Number(this.amount);
                    let total = parity * amountNumber;
                    resolve(total);
                })
                .catch(err => reject(err));
        });
    }
    changeAmount(newAmount) {
        this.amount = newAmount;
    }
    changeFirstSelect(newFirst) {
        this.firstCurrency = newFirst;
    }
    changeSecondSelect(newSecond) {
        this.secondCurrency = newSecond;
    }

}





