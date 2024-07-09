//1задание
// let a = [1,2,3]
//
// console.log(a.reverse())

//2 задание
// let a =  [0, 1, false, 2, undefined, '', 3, null]
//
// console.log(a.filter(el => el))

//3 задание
// function removeDuplicates(nums) {
//     let uniqueNums = [...new Set(nums)];
//     return uniqueNums;
// }
//
// let nums = [1, 2, 3, 1, 2];
// let result = removeDuplicates(nums);
// console.log(result);

//задание 4
// let a = ['a', 'b', 'c']
// let b = [1, 2, 3]
//
// let result = a.concat(b)
// console.log(result)

//задание 5
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let result = a.concat(b)
// console.log(result)

// let a = [1, 2, 3]
// a.unshift(4, 5, 6)
// console.log(a)

//задание 6
// let a =  [1, 2, 3, 4, 5]
// a.splice (1, 2)
// console.log(a)

//задание 7
// let obj = { js: 'test', jq: 'hello', css: 'world' };
// let keys = Object.keys(obj);
// console.log(keys);

//задание 8
// let a = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// let result = a.join(', ')
//
// console.log(result)

//задание 9
// let a = 'КаЖдЫй ОхОтНиК';
// // split - превращает из строки в массив
// // join - из массива делает строку
//
// const arrayString = a.split('').map(letter => {
//     if (letter === letter.toUpperCase()) {
//         return letter.toLowerCase();
//     } else {
//         return letter.toUpperCase();
//     }
// }).join('').split()
//
// console.log(arrayString)

// push
// pop
// shift
// unshift

// reverse
// indexOf('')
// split
// join

// filter(() => {})


// вывести в консоль все числа от   50  до 1
// for (let i = 50; i > 1; i--) {
//     console.log(i)
// }

// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
//
// function byACar(array, mark, start = 0, end = 1000000, yearStart = 1000, yearEnd = 2040) {
//     return array.filter((car) => car.make === mark && car.price >= start && car.price <= end && car.year >= yearStart && car.year <= yearEnd)
// }
//
// console.log(byACar(cars, "Tesla", 40000, 60000, 2019))

