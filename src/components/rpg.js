let dayCount = 0;
let day = 10000;
let week = day * 7;
let month = week * 4;
let year = month * 12;
let defaultStr = 100;

let sawdolMeat = 0;
let sawdolStr = defaultStr * sawdolMeat;
let sawdolMeatCount = (meat) => {
  sawdolMeat * meat;
};

let fatStr = defaultStr;

let fight = () => {
  let sawdolWin = false;
  let fatWin = false;

  if (sawdolStr > fatStr) {
    sawdolWin = true;
    fatWin = false;
    console.log(`sawdol wygrał o ${sawdolStr - fatStr} punktów`)
  } else if (fatStr > sawdolStr) {
    fatWin = true;
    sawdolWin = false;
    console.log(`gruby wygrał o ${fatStr - sawdolStr} punktów`)
  } else {
    console.log('Błąd/Remis');
  }
};

while (true) {
  setTimeout(sawdolMeatCount, day);
  dayCount++;
  console.log(sawdolMeat);
  console.log('test');

  if(dayCount === Math.floor(365/2)) {
    fight();
  }
}
