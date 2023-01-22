let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  /// Task1
let result = arr.reduce(function(sum, elem) {
	if (elem >= 0) {
		return sum + elem;
	} else {
		return sum;
	}
});

console.log(result);

// let result = arr.reduce(function (sum, elem) { //// for task 1
//    return elem >= 0 ? sum + elem : sum;
// });
// console.log(result);




const array = [[1, 2, 3, 4, 5], //// task 2
    ["x", "y", "z"],
];
const deepCount = (arr) => {
    let result = arr.leght;
    for (const char of arr) {
        if (result[char] === undefined) {
           return result[char] = 1;
        } else {
           return result[char]++;
        }
    }

    return result
}
console.log(deepCount);

// const deepCount = (arr) => { //// for task 2
//     let result = arr.leght;
//     for (const char of arr) {
//         return (result[char] === undefined) ? result[char] = 1 : result[char]++;
//     }
// }
// console.log(deepCount);

const employees = { ///// Task 3
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
}

// let sum = 0;
// function sumSallary(obj) {
//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             obj[key].array.forEach(employees => sum += employees.salary);
//         } else {
//             sumSallary(obj[key]);
//         }
//     }
// }



function sumSallary(obj = 0) {
    let sum = obj;
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].array.forEach(employees => sum += employees.salary);
        } else {
            sumSallary(obj[key]);
        }
    }
}


sumSallary(employees); ///// Task 4
console.log(obj);

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];
let max = Math.max.apply(arr1, arr2, arr3);
console.log(max);