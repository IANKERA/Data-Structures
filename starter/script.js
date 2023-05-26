'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    },
    orderDelivery: function({starterIndex, mainIndex, time, address}) {
      console.log(`Order recieved! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

   orderPasta: function (int1, int2 ,int3) {
      console.log(`here is yur pasta ${int1} with ${int2} , ${int3}`);

   },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex:2,

});

 
const{name, openingHours, categories} = restaurant;
  console.log(name, openingHours, categories);

const {
  name : restaurantName, 
  openingHours: hours, 
  categories: tags,}
   = restaurant;

console.log(restaurantName, hours, tags);

 ({sat: { open, close}} = openingHours);
console.log(open, close);

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

// const ingredients = [prompt('letss make a pasta ingredien 1'), prompt('ingredient 2')
// ,prompt('ingrentien 3')];

// console.log(ingredients)
// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name =   'Kostas kamposis';
console.log(restaurantCopy.name);