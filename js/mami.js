console.log("Dies ist die erste Zeile der Datei mami.js");

var auswahlButtons = [];
var ergebnisButtons = [];
var anzahlVersuche = 0;
var tippToList = false;
var listCounter = 1;
var setPushTrue = false;






function neuerVersuch() {
  if (listCounter === 4) {
    //auswahlButtons.push (ergebnisButtons)
    console.log(ergebnisButtons);
    listCounter = 0;
    tippToList = true;
    console.log(tippToList);
    console.log(listCounter);
  }

  anzahlVersuche++;
  listCounter++;
  console.log(anzahlVersuche);
}

neuerVersuch();

function addToAuswahlbuttonsRED() {
    ergebnisButtons = ergebnisButtons +["red"];
    console.log(ergebnisButtons)
 
}

function addToAuswahlbuttonsBLUE() {
    ergebnisButtons = ergebnisButtons +["blue"];
    console.log(ergebnisButtons)
 
}

function addToAuswahlbuttonsGREEN() {
    ergebnisButtons = ergebnisButtons +["green"];
    console.log(ergebnisButtons)
 
}


function addToAuswahlbuttonsYELLOW() {
    ergebnisButtons = ergebnisButtons +["yellow"];
    console.log(ergebnisButtons)
 
}


