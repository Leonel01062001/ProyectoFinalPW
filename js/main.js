

const btnMain = document.querySelector("#btn-main");
const btnDessert = document.querySelector("#btn-dessert")
const btnDrink = document.querySelector("#btn-drink");


const main = document.querySelector("#main");
const dessert = document.querySelector("#dessert")
const drink = document.querySelector("#drink")

btnMain.addEventListener('click', () => {
    main.classList.value = 'main active'
    dessert.classList.value = 'dessert'
    drink.classList.value = 'drink'
})

btnDessert.addEventListener('click', () => {
    dessert.classList.value = 'dessert active'
    main.classList.value = 'main'
    drink.classList.value = 'drink'
})

btnDrink.addEventListener('click', () => {
    drink.classList.value = 'drink active'
    dessert.classList.value = 'dessert'
    main.classList.value = 'main'
})