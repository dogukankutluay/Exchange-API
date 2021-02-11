//elemnt seçimi
const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");



const ui = new Ui(firstSelect, secondSelect);
const currency = new Currency("USD", "TRY");
eventListeners();

function eventListeners() {

    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function () {
        currency.changeFirstSelect(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondSelect.onchange = function () {
        currency.changeSecondSelect(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);
    currency.exchange()
        .then(result => {
            ui.changeResult(result);
        })
        .catch(err => console.log(err));
}



