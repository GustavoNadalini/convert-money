
const convertButton = document.querySelector(".convert-button")


function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

}




convertButton.addEventListener("click", convertValues)

