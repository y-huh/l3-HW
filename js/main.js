//1
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };

// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }


//2
// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleyball",
//     interest: "Sleep"
// };
// const mergedPerson = { ...person1, ...person2 };
// console.log(mergedPerson);

//3
// function result(arr) {
//     let last = arr[arr.length - 1] + 1;
//     arr.push(last);
//     return arr;
// }
// let numbers = [1, 2, 3, 4];
// console.log(result(numbers));


//4
// function changer(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
    
//     if (arr[0] % 2 === 0) {
//         arr.unshift(sum);
//     } else {
//         arr.push(sum);
//     }
    
//     return arr;
// }

// let numbers = [3, 5, 2, 8];
// console.log(changer(numbers));

//5
// function swap(arr) {
//     if (arr.length < 2) {
//         return arr; 
//     }
    
//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
    
//     return arr;
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(swap(numbers)); 

//6
// function collectWords(words = [], count = 6) {
//     if (count === 0) {
//         return words;
//     }
    
//     let word = prompt("So'z kiriting:");
//     words.push(word);
//     return collectWords(words, count - 1);
// }

// let wordsArray = collectWords();
// console.log(wordsArray);

//7
