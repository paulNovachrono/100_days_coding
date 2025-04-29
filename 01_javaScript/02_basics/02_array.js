const heros = ['Ironman', 'Thor', 'Hulk', 'Captain America'];
const dcheroes = ['Batman', 'Superman', 'flash'];

//heros.push(dcheroes);
// console.log(heros); // ['Ironman', 'Thor', 'Hulk', 'Captain America', ['Batman', 'Superman', 'flash']]

// console.log(heros[4][2]); // flash

// Arrays are mutable

const allHeros = heros.concat(dcheroes); // concat returns a new array
//console.log(allHeros); // ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Batman', 'Superman', 'flash']

// spread operator
const all_new_heros = [...heros, ...dcheroes]; // spread operator
console.log(all_new_heros); // ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Batman', 'Superman', 'flash']

// Nested Array
const arrNesting = [1, 2, 3, [4, 5, 6], [7, 8, 9, ['a', 'b', 'c'], 10]];
// Flat 
const flatArr = arrNesting.flat(Infinity); // flat returns a new array
console.log(flatArr);

console.log(Array.isArray(arrNesting)); // true
console.log(Array.isArray("Debajoyti")); // false

// converting string to array
console.log(Array.from("Debajoyti")); // ['D', 'e', 'b', 'a', 'j', 'o', 'y', 't', 'i']
// But we can only convert single element by using from

// EX-2
const str = "Debajoyti";
const str2 = "KGEC";
const str3 = "JavaScript";

const ofArr = Array.of(str, str2, str3);
console.log(ofArr); // ['Debajoyti', 'KGEC', 'JavaScript']


