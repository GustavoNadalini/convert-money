
const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.7
    const euroToday = 6.2
    const libraToday = 7.4
    const bitcoinEquivalentReal = 0.00000201

    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: "8"
        }).format(bitcoinEquivalentReal * inputCurrencyValue)
    }



    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assests/dolar.png"

    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assests/euro.png"
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assests/libra.png"
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assests/bitcoin.png"
    }

    convertValues ()
}


convertButton.addEventListener("click", convertValues)

currencySelect.addEventListener("change",changeCurrency)

