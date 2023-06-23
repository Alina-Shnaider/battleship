const fs = require("fs");

const {
  arrObjField,
} = require('./generate');

let left = ['A','B','C','D','E','F'];
let right = ['0','1','2','3','4','5'];

  // let arrPadawans = [];
  // fileNamePad = './battlefield1.txt';
  // padawans = fs.readFileSync(fileNamePad, 'utf-8');
  // arrPadawans = padawans.trim().split("\n");

  // console.log(arrPadawans);

  // for (let i = 0; i < getPadawanNames().length; i++) {
  //   let arr = [];
  //   arr.push(getPadawanNames()[i]);
  //   arr.push(getLightsaberScores()[i]);
  //   arrPadScorEq.push(arr);
  // }

let arrObjField2 = [];
for (let i = 0; i < 6; i += 1) {
    const objCrew = {};
    for (let j = 0; j < 6; j += 1) {
    arrObjField2.push(objCrew); 
  }
}

let bit = process.argv[2];

let bit1 = bit[0];
let bit2 = bit[1];

if (arrObjField[bit2][bit1] === '0') {
  arrObjField[bit2][bit1] = '⚫️'
} else {
  arrObjField[bit2][bit1] = '❌'    
}

fs.writeFileSync('./battlefield1.txt', ``);
    
fs.appendFileSync('./battlefield1.txt', `    A B C D E G\n`);
fs.appendFileSync('./battlefield1.txt', `    -----------\n`);
let write;
for (let i = 0; i < 6; i += 1) {
  let arrCrew = [];
  for (let j = 0; j < 6; j += 1) {
    arrCrew[j] = arrObjField[i][left[j]];
  }
  write = arrCrew.join(' ');
  fs.appendFileSync('./battlefield1.txt', `${right[i]} | ${write}\n`);
}

const readField2 = fs.readFileSync("./battlefield1.txt", "utf-8");

console.log(readField2);


// console.log(bit);

function fire() {
  // здесь код, который меняет игровое поле после выстрела

}

function showBattlefield(table) {
  // здесь код, который показывает игровое поле в консоли
  console.log(table);
}