var pos1 = "1"; 
var pos2 = "2";
var pos3 = "3";
var pos4 = "4";
var zaehler = "0";



console.log(zaehler);
function checkTipp(){
    if (zaehler == 4){
        console.log("Die Runde ist vorbei. So hast Du getippt:")
    }
}
checkTipp(); 


function rot() {
  if (zaehler > 3) {
    console.log("Du hast gesetzt. So hast Du gewaehlt.");
  } else {
    pos1 = "red";
    zaehler++;
    console.log(zaehler);
  }
  console.log(pos1);
}

//rot();

function blau() {
  if (zaehler > 3) {
    console.log("Du hast gesetzt. So hast Du gewaehlt.");
  } else {
    pos1 = "blue";
    zaehler++;
    console.log(pos1);

    console.log(zaehler);
  }
}
//blau();

function gruen() {
  if (zaehler > 3) {
    console.log("Du hast gesetzt. So hast Du gewaehlt.");
  } else {
    pos1 = "green";
    zaehler++;
    console.log(pos1);
    console.log(zaehler);
  }
}
//gruen();

function gelb() {
  if (zaehler > 3) {
    console.log("Du hast gesetzt. So hast Du gewaehlt.");
  } else {
    pos1 = "yellow";
    zaehler++;
    console.log(zaehler);
    console.log(pos1);
  }
}

