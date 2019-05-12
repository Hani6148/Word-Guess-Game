
var person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];

win = 0;
var currentWord = document.getElementById("current");
var alreadyGuessed = document.getElementById("already");
var guessesRemaining = document.getElementById("remaining");
var source = document.getElementById("image");
var imag = document.createElement("img");
var displayWins = document.getElementById("win");
var ran=0;
var personPlayed = 0;
personName = "";
pickperson();
function pickperson() {
    ran = Math.floor(Math.random() * person.length);
    console.log(ran);
    personName = person[ran];
    if (personName == "davinci") {
        

        imag.src = "assets/images/davinci.jpg";
        imag.width = 350;
        imag.height = 392;

        source.appendChild(imag);






    }
    if (personName == "tesla") {
        

        imag.src = "assets/images/tesla.jpg";
        imag.width = 350;
        imag.height = 392;

        source.appendChild(imag);





    }
    if (personName == "plato") {
        

        imag.src = "assets/images/plato.jpg";
        imag.width = 350;
        imag.height = 392;

        source.appendChild(imag);





    }
    if (personName == "newton") {
        

        imag.src = "assets/images/newton.jpg";
        imag.width = 350;
        imag.height = 392;

        source.appendChild(imag);





    }
    if (personName == "darwin") {

        

        imag.src = "assets/images/darwin.jpg";
        imag.width = 350;
        imag.height = 392;

        source.appendChild(imag);




    }
    if (personName == "galileo") {
        

        imag.src = "assets/images/gali.jpg";
        imag.width = 350;
        imag.height = 392;

        source.appendChild(imag);





    }
    playPerson();
}





function playPerson() {
    
    var winLetter = 0;
    var remain = 12;
    var name = personName.split('');
    var removed = person.splice(ran, 1);
    
    var display = ""

    len = name.length
    console.log(name);
    var nameDash = new Array(len);
    for (i = 0; i < name.length; i++) {
        nameDash[i] = "-";
    }
    console.log(nameDash);
    currentWord.innerHTML = display;
    displayWins.innerHTML = win;
    guessesRemaining.innerHTML = remain;
    alreadyGuessed.innerHTML ="";

    document.onkeyup = function () {
        remain--;
        var typed = event.key;
        for (i = 0; i < name.length; i++) {
            if (typed == name[i]) {
                nameDash[i] = typed;
                name[i] = "-";
                alreadyGuessed.innerHTML += typed;
                winLetter++


                break;
            }

        }

        display = nameDash.join('');
        console.log(display);
        
        currentWord.innerHTML = display;
        displayWins.innerHTML = win;
        guessesRemaining.innerHTML = remain;
        if (winLetter == name.length) {
            win++;

        }


        if (winLetter == name.length || remain == 0) {
            personPlayed++;
            if (personPlayed == 6) {
                alert("you just guessed "+win+" historical figures out of 6");
                goReset();
                
            }
            setTimeout(function () {
                source.removeChild(imag);

                pickperson();

            }, 500)




        }

    }

}
function goReset() {
    
    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
    personPlayed = 0;
    win = 0;
    pickperson();


}
