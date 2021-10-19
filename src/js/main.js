function getElement(id, text) {
    let Element = document.getElementById(id)
    Element.innerHTML = text;
}

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

async function getAPI() {
    try {
        let exchangeElement = document.querySelector("#exchange"),
            tryTotalElement = document.querySelector("#try-total");
        let exchangeStatus = document.querySelector("#exchange-option").value;
        let req = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=a9ad22a6a6a1b8950de23e3947bc3d93');

        let res = await req.json();
        let EUR, USD, JPY, DKK, GBP, NOK, TRY;
        EUR = res.rates.EUR, USD = res.rates.USD, JPY = res.rates.JPY, DKK = res.rates.DKK, GBP = res.rates.GBP, NOK = res.rates.NOK, TRY = res.rates.TRY;
        getElement("usd-buy", USD);
        getElement("usd-sale", USD);
        getElement("eur-buy", EUR);
        getElement("eur-sale", EUR);
        getElement("jpy-buy", JPY);
        getElement("jpy-sale", JPY);
        getElement("dkk-buy", DKK);
        getElement("dkk-sale", DKK);
        getElement("nok-buy", NOK);
        getElement("nok-sale", NOK);
        getElement("gbp-buy", GBP);
        getElement("gbp-sale", GBP);

        exchangeElement.addEventListener("input", function (e) {
            if (this.value.length == 0) {
                tryTotalElement.innerHTML = exchangeElement.getAttribute("placeholder");
            } else {
                if (exchangeStatus == "EUR") {
                    tryTotalElement.innerHTML = exchangeElement.value * TRY;
                }
            }
        })

    } catch (error) {
        console.log(error);
    }
}

getAPI();