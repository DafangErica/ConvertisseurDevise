let api = `: https://v6.exchangerate-api.com/v6/{apikey}/latest/USD`;
const fromDropDown = document.getElementById ("from-currency-select");
const toDropDown = document.getElementById ("to-currency-select");
// create dropdown from the currencies array
currencies.forEach((currency)=>{
    const option = document.createElement ("option");
    option.value = currency;
    option.text=currency;
    fromDropDown.add(option);
});

// Repeat same thing for other toDropDown
currencies.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    toDropDown.add(option);

})
