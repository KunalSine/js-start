const name = "kunal"
const repoCount = 50

// ********** OLD WAY *******
// console.log(name + repoCount + "Value");

//console.log(`Hello my name is  ${name} and my repo couunt is ${repoCount} `);


const gameName = new String('kunal-ks')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "   kunal   "
console.log(newStringOne);
console.log(newStringOne.trim()); // ignore unnessary spaces while inputing 

const url = "https://kunal.com/kunal%20singh" // if space in website name, browser automatically converts in %20

url.replace('%20', '-')
console.log(url.replace('%20', '-'));

url.includes('kunal')

console.log(url.includes('kunal'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'))

