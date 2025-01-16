// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']



// Exercise 1 

// names.forEach(name => console.log(name));
// provinces.forEach(province => console.log(province))

// names.forEach((name,index) => {
//   console.log(`${name} (${provinces[index]})`)
// })


// Excercise 2

// const provinceUppercase  = provinces.map(province => province.toUpperCase(province))

// console.log(provinceUppercase)


// Excercise 3

const nameLegnthsArr = names.map(name => name.length)


// Excercise 4

const provinceSorted = provinces.sort()


// Excercise 5

// const provinceFiltered = provinces.filter(province => !province.includes('Cape'))

// console.log(provinceFiltered.length)


// Excercise 6

const nameContainsS = names.map(name => {
  return [...name].some(character => character === 'S')
})


// console.log(nameContainsS)


// Excercise 7


const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]; 
  return acc;
}, {});

// console.log(nameProvinceMapping);


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

// console.log(products.map(item => item.product))

// Advance Excercise 2 ✅

// console.log(products.filter(item => item.product.length <= 5))


// Advance Excericse 3 ✅

// console.log(products.map(item => Number(item.price)).reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 0))


// Advance Excercise 4 ✅

// console.log(products.reduce((acc,item) => {
//   return acc + item.product
// },''))

// Advance Excerice 5 ☣️

// console.log(products.map(item => Number(item.price)).filter(number => number))


// Advance Excericse 6 ☣️