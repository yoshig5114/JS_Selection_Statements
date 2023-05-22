console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let number1 = 9;
let answer = window.prompt("Enter a number");
if (answer < number1){
  console.log('too low');
}
else if(answer > number1){
  console.log('too high');
}
else{
  console.log('Congratulations!!');
}

let birthMonth = window.prompt("What is your birth month");
switch (birthMonth){

  case 'jan': 
  case 'dec':
  case 'feb': console.log("Your birthday is in winter");
  break;
  case 'mar':
  case 'apr':
  case 'may': console.log("Your birthday is in spring");
  break;
  case 'jun':
  case 'jul':
  case 'aug': console.log("Your birthday is in summer");
  break;
  default: console.log("Your birthday is in fall");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId){
  case '01': type = "tank top";
  break;
  case '02': type = "t-shirt";
  break;
  case '03': type = "long sleeve";
  break;
  case '04': type = "sweat shirt";
  break;
  default: type = "other";
}
switch (colorId){
  case 'BK': color = "Black";
  break;
  case 'BL': color = "Blue";
  break;
  case 'RD': color = "Red";
  break;
  case 'PU': color = "Purple";
  break;
  default: color = "White";
}
switch(sizeId){
  case 'S': size = "Small";
  break;
  case 'M': size = "Medium";
  break;
  case 'L': size = "Large";
  break;
  case 'XL': size = "Extra Large";
  break;
  default: size = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`);

