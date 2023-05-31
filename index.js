const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



// const titleCased = tutorials.map(map) => { 

//     function capital_letter(str) 
// {
//     str = str.split(" "); //splits into an array

//     for (let i = 0, x = str.length; i < x; i++) { //while "i" is less than the string's length (x) increment "i"
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1); //the first part tells the code to capitalize the first letter in the string, while the second tells the code to capture the rest of the string. 
//     }
//     console.log(str)

//     return str.join(" "); //joins into a string
// }
// return tutorials
// }

const titleCased = () => {
  return tutorials.map(line =>
    line
      .split(" ")
      .map(token => token.charAt(0).toUpperCase() + token.slice(1))
      .join(" ")
  );
};