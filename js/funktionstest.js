console.log("Das ist der Start der JavaScript Datei" + " funktionstest");

//var Blau = false;
//var Rot = false;
//var Gruen = false;
//var Gelb = false;

var Zaehler = 0;
var PosOnList = 0;
var BackToFalse = "Blau";
var Ergebnisliste = [];
//console.log(Blau)
//console.log(Rot)
//console.log(Gruen)
//console.log(Gelb)
//console.log(Zaehler)
//console.log(PosOnList)
//console.log(BackToFalse)

function check() {
  if (Zaehler == 3) {
    console.log("Alle Farben sind gesetzt!");
    console.log("Funktion an dieser Stelle automatisch gestoppt.");
    Zaehler++;
    PosOnList++;
   
    alert("Du hast gewaehlt. Berechnung laeuft...");
    check();
    
  }
  else if(Zaehler == 4){
    console.log(Ergebnisliste)
  } else {
    
    console.log("Der Zaehler ist gestiegen auf " + Zaehler);
  }
}


//console.log(Zaehler)

function PushToListRed() {
    PosOnList++;
    Zaehler++;
    Ergebnisliste.push("ROT");
    console.log(Ergebnisliste)
  
}
//PushToListRed();
function PushToListBlue() {
    PosOnList++;
    Zaehler++;
    Ergebnisliste.push("BLAU");
    console.log(Ergebnisliste)
}
//PushToListBlue();
function PushToListGreen() {
    PosOnList++;
    Zaehler++;
    Ergebnisliste.push("GRUEN");
    console.log(Ergebnisliste)
}
//PushToListGreen();
function PushToListYellow() {
    PosOnList++;
    Zaehler++;
    Ergebnisliste.push("GELB");
    console.log(Ergebnisliste)
}
//PushToListYellow//();

function PlaceOnList() {
  if (Zaehler >= 0) {
    
    console.log("Der naechste Platz auf der Auswahlliste ist: " + (PosOnList + 1));
  } else if (Zaehler >= 4) {
    console.log("Alle Plaetze gesetzt.");
    alert("Wart halt mal, muss erstmal rechnen");
  }

  function ShowTipps(){
    document.getElementById("ausgabeTipps").innerHTML = 0;
    console.log(Ergebnisliste)
  }

  //else if (PosOnList == 1){
  //PosOnList++;

  //}
  //else if (PosOnList == 2){
  //PosOnList == 3;

  //}
  //else if (PosOnList == 3){
  //PosOnList++;

  //}
  //console.log(PosOnList)
}
PlaceOnList();

//console.log(Blau)
//console.log(Rot)
//c//onsole.log(Gruen)
//console.log(Gelb)
//console.log(Zaehler)

//function check(){
//Blau = true;

//console.log(Blau)

// }
//function check(){
// Blau = true;

// console.log(Blau)

// }
//function check(){
// Blau = true;

//console.log(Blau)

// }
//function check(){
// Blau = true;

//console.log(Blau)

// }

//check();

//console.log(Rot)
