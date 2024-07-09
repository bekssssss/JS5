 //EXERCISE - 1 Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//
// let num =  [1, 2, 3]
// let num2 = num.reverse()
// console.log(num2)


 //EXERCISE - 2 Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3
 //
 // let values = [0, 1, false, 2, undefined, '', 3, null]
 // let changed = values.filter(Boolean, '')
 // console.log(changed)


 //EXERCISE - 3 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 // Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

 // function deleteDuplicates(array) {
 //  return [...new Set(array)]
 // }
 //
 // const numbers = [1, 2, 3, 1, 2]
 // console.log(deleteDuplicates(numbers))


 //EXERCISE - 4 Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let str = ['a', 'b', 'c']
// let num = [1, 2, 3]
//
//  let together = str.concat(num)
//  console.log(together)


 //EXERCISE - 5 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 //
 // let num = [1, 2, 3]
 // let num1 = [4 ,5 ,6]
 // let combo = num.concat(num1)
 // console.log(combo)


 //EXERCISE - 6  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

 // let num = [1, 2, 3]
 // num.unshift(4, 5, 6)
 // console.log(num)


 //EXERCISE - 7 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

 // let num = [1, 2, 3, 4, 5]
 // num.splice(1, 2)
 // console.log(num)


 //EXERCISE - 8  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// let obj = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world',
// }
// console.log(obj)


 //EXERCISE - 9Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.

 // let str = ['Капуста', 'Репа', 'Редиска', 'Морковка']
 // let result = str.join(', ')
 // console.log(result)


 //EXERCISE - 10 Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]
 //
 // let inputStr = "КаЖдЫй ОхОтНиК";
 // function changeStr (str) {
 //    let str1 = ''
 //    for (let i = 0; i < str.length; i++){
 //        let char = str[i]
 //        if (char === char.toUpperCase()){
 //            str1 += char.toLowerCase()
 //        }
 //        else {
 //            str1 += char.toUpperCase()
 //             }
 //        }
 //    return str1
 // }
 // let resultStr = changeStr(inputStr);
 // let resultArray = resultStr.split(' ');
 //
 // console.log(resultArray);
 // const result = inputStr.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
 // console.log(inputStr)


 //EXERCISE - 11

 const cars = [
     {
         make: "Ford",
         model: "Mustang",
         year: 1969,
         color: "red",
         price: 25000
     },
     {
         make: "Ford",
         model: "F-150",
         year: 2017,
         color: "blue",
         price: 30000
     },
     {
         make: "Tesla",
         model: "Model S",
         year: 2018,
         color: "black",
         price: 120000
     },
     {
         make: "Chevrolet",
         model: "Camaro",
         year: 1970,
         color: "orange",
         price: 60000
     },
     {
         make: "Dodge",
         model: "Challenger",
         year: 2019,
         color: "red",
         price: 35000
     },
     {
         make: "Chevrolet",
         model: "Corvette",
         year: 2019,
         color: "blue",
         price: 90000
     },
     {
         make: "Tesla",
         model: "Model 3",
         year: 2019,
         color: "white",
         price: 40000
     },
     {
         make: "Mercedes",
         model: "C-Class",
         year: 2019,
         color: "black",
         price: 60000
     }
 ]

// // const checkPrice = cars.filter(cars => cars.price >= 40000 && cars.price <= 60000)
 function getCars(array, mark, start = 0, end = 1000000, yearStart = 1000, yearEnd = 2030) {
    return array.filter((car) => car.make === mark && car.price >= start && car.price <= end && car.year >= yearStart && car.year <= yearEnd )
 }

console.log(getCars(cars, "Dodge", 10000, 60000, 2017))
