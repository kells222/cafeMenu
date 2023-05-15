// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: 'espresso',
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: 'affogato',
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: 'americano',
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: 'frappe',
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]
module.exports = coffeeMenu



// Print an array of all the drinks on the menu.
for (let i = 0; i < coffeeMenu.length; i++) {
    console.log(coffeeMenu[i].name);
  }

// 3. Print an array of drinks that cost 5 and under.
let drinksLess = []
for (let i = 0; i < coffeeMenu.length; i++) {
if (coffeeMenu[i].price<=5) {
    drinksLess.push(coffeeMenu[i].name)
}
}
console.log(drinksLess)

// 4. Print an array of drinks that are priced at an even number.
let evenNum =[]
for(let i =0; i<coffeeMenu.length;i++){
    if (coffeeMenu[i].price%2===0){
        evenNum.push(coffeeMenu[i].name)
    }
}
console.log(evenNum)


// 5. Print the total if you were to order one of every drink.

// 6. Print an array with all the drinks that are seasonal.
let season = []
for(let i=0;i<coffeeMenu.length;i++){
    if(coffeeMenu[i].seasonal===true){
        season.push(coffeeMenu[i].name)
    }
}
console.log(season)


// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
// not done
let seasons = []
for(let i=0;i<coffeeMenu.length;i++){
    if(coffeeMenu[i].seasonal===true){
        console.log(coffeeMenu.name + " with imported beans");
    }
}
console.log(seasons)



