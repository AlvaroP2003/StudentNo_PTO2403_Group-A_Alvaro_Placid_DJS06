// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']



// Exercise 1 ✅

names.forEach(name => console.log(name)); // Using a forEach() just to log out the names of students.
provinces.forEach(province => console.log(province)) // Same forEach() just loggin out the provinces.

names.forEach((name,index) => { // Looping through the names array and including the index to match the index of the provinces to assign each name with a province.
  console.log(`${name} (${provinces[index]})`) // Using template literal to log out all names and then using the index to include the province names.
})


// Excercise 2 ✅

const provinceUppercase  = provinces.map(province => province.toUpperCase(province)) // Using the map method and toUpperCase functions to return an array of elemetns all in uppercase

console.log(provinceUppercase) // Loggin out the new array to the console


// Excercise 3 ✅

const nameLegnthsArr = names.map(name => name.length) // Using map mathod to return the length of character that each element in the array contain


// Excercise 4 ✅

const provinceSorted = provinces.sort() // Used the built-in .sort() function to sort the provinces alphabetically


// Excercise 5 ✅

const provinceFiltered = provinces.filter(province => !province.includes('Cape')) // Using the built-in .filter() function to retrun an array with elements that don't contain the word 'Cape'

console.log(provinceFiltered.length) // Logging out the count/lenght of the remaining elements


// Excercise 6 ✅

const nameContainsS = names.map(name => {
  return [...name].some(character => character === 'S') // Using the built-in map method to return array, and then using the .some() function to see if the character equal the letter 'S"
})


// Excercise 7 ✅


const nameProvinceMapping = names.reduce((acc, name, index) => { // Using the .reduce() function to manipulate elements
  acc[name] = provinces[index]; // Setting the accumulator as name and assigning the respective province to it
  return acc;
}, {}); // Returns accumulator to an empty object


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Advance Exercise 1 ✅

products.map(item => console.log(item.product)) // Using built-in map() function to log out an array of names

// Advance Excercise 2 ✅

console.log(products.filter(item => item.product.length <= 5)) // Returning a new array with with characters that only have 5 or less characters


// Advance Excericse 3 ✅

console.log(products.map(item => Number(item.price)).reduce((accumulator, currentValue) => { // Firstly returning an array of only numbers. Then using the reduce function to add every number in that array to result in the sum.
  return accumulator + currentValue
}, 0))


// Advance Excercise 4 ✅

console.log(products.reduce((acc,item) => {  // Using the reduce function to add every currentvalue[item] that has the property 'product' to the nxt value which concatenates the strings.
  return acc + item.product
},''))

// Advance Excerice 5 ✅

// Converting strings to numbers in the products object. Filtering out any number below zero seeing as converting an empty string "" to a number results in 0 which would make the lowest number 0. So filtering it out makes the logic correct.
// Using Math.max() and Math.min() to find the lowest and highest values in the array.
// All wrapped in template literals to match required format

console.log(`Highest: ${Math.max(...products.map(item => Number(item.price)).filter(number => number > 0))}
Lowest:${Math.min(...products.map(item => Number(item.price)).filter(number => number > 0))}`)

// Advance Excericse 6 ✅

console.log(
  products.map(item =>
    Object.entries(item).reduce((obj, [key, value]) => { // Looping throught object using Object.entries
      if (key === 'product') {                            // Using if() statment to see if value matches 'product'
        obj['name'] = value;                              // If value matches it will assign new value to the newly created  object property obj[name] and/or object[cost]
      } else if (key === 'price') {
        obj['cost'] = value;
      }
      return obj; // Returning new object
    }, {})
  )
);
