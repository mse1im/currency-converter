let tryTotalElement = document.querySelector("#try-total"),
    EUR = null,
    USD = 9.43,
    JPY = 0.083,
    DKK = 1.48,
    GBP = 13.02,
    NOK = 1.13;

const moneyCurrency = ["usd-buy", "usd-sale", "eur-buy", "eur-sale", "jpy-buy", "jpy-sale", "gbp-buy", "gbp-sale", "dkk-buy", "dkk-sale", "nok-buy", "nok-sale"];
export const exchangeStatus = document.querySelector("#exchange-option"),
    exchangeElement = document.querySelector("#exchange");

export class Money {

    static getElement(id, text) {
        let Element = document.getElementById(id)
        Element.innerHTML = text;
    }

    static async getEURValue() {
        let req = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=a9ad22a6a6a1b8950de23e3947bc3d93');
        let res = await req.json();
        EUR = res.rates.TRY;
        const moneyCurrencyName = [USD, USD, EUR, EUR, JPY, JPY, GBP, GBP, DKK, DKK, NOK, NOK];
        
        for (let i = 0; i < moneyCurrency.length; i++) {
            this.getElement(moneyCurrency[i], moneyCurrencyName[i].toFixed(2));
        }
    }

    static convertMoney() {
        if (this.value.length == 0) {
            tryTotalElement.innerHTML = exchangeElement.getAttribute("placeholder");
        } else if (exchangeStatus.value == "EUR") {
            tryTotalElement.innerHTML = Number(exchangeElement.value * EUR).toFixed(2);
        } else if (exchangeStatus.value == "USD") {
            tryTotalElement.innerHTML = Number(exchangeElement.value * USD).toFixed(2);
        } else if (exchangeStatus.value == "JPY") {
            tryTotalElement.innerHTML = Number(exchangeElement.value * JPY).toFixed(2);
        } else if (exchangeStatus.value == "GBP") {
            tryTotalElement.innerHTML = Number(exchangeElement.value * GBP).toFixed(2);
        } else if (exchangeStatus.value == "NOK") {
            tryTotalElement.innerHTML = Number(exchangeElement.value * NOK).toFixed(2);
        } else if (exchangeStatus.value == "DKK") {
            tryTotalElement.innerHTML = Number(exchangeElement.value * DKK).toFixed(2);
        }
    }
}