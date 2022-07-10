body {
    margin: 0;
    font-family: sans-serif;
    background-image: url(/img/altbackground.png);
    background-color: black;
}

.spielfeld {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}

.umrandung {
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient( #d4cfc9, #848484);
    width: 25%;
    margin: 0 auto;
}

#spielbuttonRot{
background-color: #c40f54;
}
#spielbuttonBlau{
background-color: blue;
}
#spielbuttonGruen{
background-color: green;
}
#spielbuttonGelb{
background-color: yellow;
}

.anzeige {
    margin: 0 auto;
    text-align: center;
    background: linear-gradient(#146e15, #30f032, #146e15);
    padding: 2% 5%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 20px;
    box-shadow: inset 5px 5px 25px #111111;
    color: white;
}

h2 {
    font-size: max(2.5vw, 1.8em);
    margin: 0;
    text-shadow: 2px 2px 2px black;
}

.bildbehaelter {
    border: 5px solid #d4cfc9;
    border-radius: 5px;
    box-sizing: border-box;
    background-image: url(/img/altbackground.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    display: flex;
    align-items: flex-end;
    box-shadow: inset 0px 0px 25px black;
}

#spielstandbild {
    width: 100%;
}

.spielbehaelter {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 0;
    width: 75%;
    background: linear-gradient(to right, #000899, #4072bd, #000899);
    border: 3px solid #d4cfc9;
    border-radius: 7%/50%;
    box-shadow: inset 0px 0px 10px black;
}

.behaeltertext {
    padding: 0 5%;
    font-size: xx-large;
    margin: 0;
    text-shadow: 1px 1px 1px black;
}

#spielbutton {
    font-size: xx-large;
    margin: 0 auto;
    padding: 10px 50px;
    background-image: linear-gradient(#d4cfc9, #848484);
    font-weight: bold;
    border: 5px solid #d4cfc9;
    border-radius: 10%/50%;
    box-shadow: inset 0px 0px 10px black;
    color: white;
    text-shadow: 1px 1px 5px black;
}

#spielbutton:hover {
    box-shadow: inset 0px 0px 5px black, 0px 0px 10px wheat;
    cursor: pointer;
}

#spielbutton:focus {
    outline: 0;
}

@media (max-width: 1200px) {
    .umrandung {
        width: 50%;
    }    
}

@media (max-width: 575px) {
    .umrandung {
        width: 75%;
    }

    .spielbehaelter {
        padding: 5px 0;
        width: 95%;
    }

    #spielbutton {
        font-size: xx-large;
        padding: 5px 15%;
    }
}