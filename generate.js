const fs = require("fs");

function generate() {
  // здесь код генерации игрового поля
}

arrObjField = [];
let left = ['A','B','C','D','E','F']
let right = ['0','1','2','3','4','5']
let empty = '0';
let ship = '⛴️';
let miss = 'X';
let count = 0;
for (let i = 0; i < 6; i += 1) {
  const objCrew = {};
  let count2 = 0;
  for (let j = 0; j < 6; j += 1) {
    let random = Math.floor(Math.random() * 2);
    if (random && count < 9 && count2 < 2) {
      objCrew[left[j]] = ship;
      count += 1;
      count2 += 1;
    } else objCrew[left[j]] = empty;
  }
  arrObjField.push(objCrew);
}

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

module.exports = {
  arrObjField,
}

console.log(fs.readFileSync('./battlefield1.txt', 'utf-8'));
