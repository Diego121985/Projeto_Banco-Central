
const convertButton = document.querySelector(".convert-button")
const euroBr = document.querySelector(".currency-select")

function convertValues() {

   const inputCurrencyValue = document.querySelector(".input-currency").value
   const brasil = document.querySelector(".currency-value")
   const outraMoeda = document.querySelector(".currency-value1")
 

   const dolarToday = 5.2
   const euroToday = 6.2




   if (euroBr.value == "euro") {


      outraMoeda.innerHTML = new Intl.NumberFormat('de-DE', {
         style: 'currency',
         currency: 'EUR'

      }).format(inputCurrencyValue / euroToday
      )


   }
   if (euroBr.value == "dolar") {

      outraMoeda.innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD'

      }).format(inputCurrencyValue / dolarToday)


   }
 


   brasil.innerHTML = new Intl.NumberFormat('pt-Br', { 
      style: 'currency',
       currency: 'BRL' 
      }).format(inputCurrencyValue)
}

function changeCurrency() {
const currencyName = document.getElementById("dolar-americano")
const currencyImage = document.querySelector(".currency-image") 


if(euroBr.value == 'dolar'){

   currencyName.innerHTML = 'Dólar americano'
   currencyImage.src ='./img/estados-unidos (1) 1.png'
}


if(euroBr.value == 'euro'){

   currencyName.innerHTML = '€ Euro'
   currencyImage.src = './img/Euro (1).png'
}
convertValues()
}


euroBr.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)
