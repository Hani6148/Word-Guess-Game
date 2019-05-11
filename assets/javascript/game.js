
var person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
var win = 0;
var
playnum = 0;
pickperson();
function pickperson() {
    var ran = Math.floor(Math.random() * person.length);
    console.log(ran);

    var picked = person[ran];
    console.log(picked);
    if (picked == "davinci") {
        var removed = person.splice(ran, 1);


        console.log("play: " + playnum);

        davinci();

    }
    if (picked == "tesla") {
        var removed = person.splice(ran, 1);


        console.log("play: " + playnum);

        tesla();
    }
    if (picked == "plato") {
        var removed = person.splice(ran, 1);


        console.log("play: " + playnum);
        plato();

    }
    if (picked == "newton") {
        var removed = person.splice(ran, 1);


        console.log("play: " + playnum);
        newton();

    }
    if (picked == "darwin") {
        darwin();
        var removed = person.splice(ran, 1);


        console.log("play: " + playnum);

    }
    if (picked == "galileo") {
        var removed = person.splice(ran, 1);


        console.log("play: " + playnum);
        galileo();

    }



    function davinci() {



        document.getElementById("already").innerHTML = "your guesses so far: ";
        var imag = document.createElement("img");
        imag.src = "assets/images/davinci.jpg";
        var source = document.getElementById("x");
        source.appendChild(imag);



        var name = ["d", "a", "v", "i", "n", "c", "i"];
        var nameD = ["-", "-", "-", "-", "-", "-", "-"];
        var wint = false;
        var rem = 12;
        var currentWord = document.getElementById("current");
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5] + nameD[6];

        document.onkeyup = function () {
            var guess = event.key;


            document.getElementById("already").innerHTML += guess;




            rem--;

            var typed = event.key;
            console.log(typed);
            for (i = 0; i < name.length; i++) {
                if (typed == name[i]) {
                    nameD[i] = typed;
                    name[i] = "-";
                    break;
                }




            }
            if (name[0] == "-" && name[1] == "-" && name[2] == "-" && name[3] == "-" && name[4] == "-" && name[5] == "-" && name[6] == "-") {
                wint = true;
                win++;
                


            }
            currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5] + nameD[6];
            document.getElementById("win").innerHTML = win;
            document.getElementById("remaining").innerHTML = rem;
            console.log(win);

           
            if (wint == true || rem == 0) {
                playnum++;
                if (playnum == 6) {
                    alert("you guessed " + win + " historical figures out of 6");
                    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
                    win = 0;
                   
                    playnum = 0;
                    source.removeChild(imag);
                    pickperson();
    
    
    
                }
                   
                setTimeout(function () {
                    source.removeChild(imag);
                    rem = 12;
                    document.getElementById("remaining").innerHTML = rem;
                    pickperson();

                }, 500)


            }





        }



    }

    function tesla() {
        document.getElementById("already").innerHTML = "";
        var imag = document.createElement("img");
        imag.src = "assets/images/tesla.jpg";
        imag.width = 350;
        imag.height = 392;
        var source = document.getElementById("x");
        source.appendChild(imag);


        var name = ["t", "e", "s", "l", "a"];
        var nameD = ["-", "-", "-", "-", "-"];
        var wint = false;
        var rem = 12;
        var currentWord = document.getElementById("current");
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];

        document.onkeyup = function () {
            var guess = event.key;


            document.getElementById("already").innerHTML += guess;



            rem--;
            document.getElementById("remaining").innerHTML = rem;
            var typed = event.key;
            console.log(typed);
            for (i = 0; i < name.length; i++) {
                if (typed == name[i]) {
                    nameD[i] = typed;
                    name[i] = "-";
                    break;
                }




            }
            if (name[0] == "-" && name[1] == "-" && name[2] == "-" && name[3] == "-" && name[4] == "-") {
                wint = true;
                win++;
                

            }
            currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];
            document.getElementById("win").innerHTML = win;
            console.log(win);




           
            if (wint == true || rem == 0) {
                playnum++;

                if (playnum == 6) {
                    alert("you guessed " + win + " historical figures out of 6");
                    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
                    win = 0;
                   
                    playnum = 0;
                    source.removeChild(imag);
                    pickperson();
    
    
    
                }


                setTimeout(function () {
                    source.removeChild(imag);
                    rem = 12;
                    document.getElementById("remaining").innerHTML = rem;
                    pickperson();
                }, 500)


            }




        }
    }

    function newton() {
        document.getElementById("already").innerHTML = "";
        var imag = document.createElement("img");
        imag.src = "assets/images/newton.jpg";
        imag.width = 350;
        imag.height = 392;

        var source = document.getElementById("x");
        source.appendChild(imag);


        var name = ["n", "e", "w", "t", "o", "n"];
        var nameD = ["-", "-", "-", "-", "-", "-"];
        var wint = false;
        var rem = 12;
        var currentWord = document.getElementById("current");
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5];

        document.onkeyup = function () {
            var guess = event.key;


            document.getElementById("already").innerHTML += guess;



            rem--;
            document.getElementById("remaining").innerHTML = rem;
            var typed = event.key;
            console.log(typed);
            for (i = 0; i < name.length; i++) {
                if (typed == name[i]) {
                    nameD[i] = typed;
                    name[i] = "-";
                    break;
                }




            }
            if (name[0] == "-" && name[1] == "-" && name[2] == "-" && name[3] == "-" && name[4] == "-" && name[5] == "-") {
                wint = true;
                win++;
                

            }
            currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5];
            document.getElementById("win").innerHTML = win;
            
            console.log(win);
            if (wint == true || rem == 0) {
                playnum++;
                if (playnum == 6) {
                    alert("you guessed " + win + " historical figures out of 6");
                    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
                    win = 0;
                   
                    playnum = 0;
                    source.removeChild(imag);
                    pickperson();
    
    
    
                }


                setTimeout(function () {
                    source.removeChild(imag);
                    rem = 12;
                    document.getElementById("remaining").innerHTML = rem;
                    pickperson();
                }, 500)

            }




        }



    }





    function darwin() {
        document.getElementById("already").innerHTML = "";
        var imag = document.createElement("img");
        imag.src = "assets/images/darwin.jpg";
        imag.width = 350;
        imag.height = 392;

        var source = document.getElementById("x");
        source.appendChild(imag);


        var name = ["d", "a", "r", "w", "i", "n"];
        var nameD = ["-", "-", "-", "-", "-", "-"];
        var wint = false;
        var rem = 12;
        var currentWord = document.getElementById("current");
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5];

        document.onkeyup = function () {
            var guess = event.key;


            document.getElementById("already").innerHTML += guess;



            rem--;
            document.getElementById("remaining").innerHTML = rem;
            var typed = event.key;
            console.log(typed);
            for (i = 0; i < name.length; i++) {
                if (typed == name[i]) {
                    nameD[i] = typed;
                    name[i] = "-";
                    break;
                }




            }
            if (name[0] == "-" && name[1] == "-" && name[2] == "-" && name[3] == "-" && name[4] == "-" && name[5] == "-") {
                wint = true;
                win++;
                

            }
            currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5];
            document.getElementById("win").innerHTML = win;
            console.log(win);

           
            if (wint == true || rem == 0) {
                playnum++;

                if (playnum == 6) {
                    alert("you guessed " + win + " historical figures out of 6");
                    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
                    win = 0;
                   
                    playnum = 0;
                    source.removeChild(imag);
                    pickperson();
                    
    
    
    
                }
                setTimeout(function () {
                    source.removeChild(imag);
                    rem = 12;
                    document.getElementById("remaining").innerHTML = rem;
                    pickperson();
                }, 500)



            }




        }



    }






    function plato() {
        document.getElementById("already").innerHTML = "";
        var imag = document.createElement("img");
        imag.src = "assets/images/plato.jpg";
        imag.width = 350;
        imag.height = 392;

        var source = document.getElementById("x");
        source.appendChild(imag);


        var name = ["p", "l", "a", "t", "o"];
        var nameD = ["-", "-", "-", "-", "-"];
        var wint = false;
        var rem = 12;
        var currentWord = document.getElementById("current");
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];

        document.onkeyup = function () {
            var guess = event.key;


            document.getElementById("already").innerHTML += guess;



            rem--;
            document.getElementById("remaining").innerHTML = rem;
            var typed = event.key;
            console.log(typed);
            for (i = 0; i < name.length; i++) {
                if (typed == name[i]) {
                    nameD[i] = typed;
                    name[i] = "-";
                    break;
                }




            }
            if (name[0] == "-" && name[1] == "-" && name[2] == "-" && name[3] == "-" && name[4] == "-") {
                wint = true;
                win++;
                

            }
            currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];
            document.getElementById("win").innerHTML = win;
            console.log(win);

           
            if (wint == true || rem == 0) {
                playnum++;
                if (playnum == 6) {
                    alert("you guessed " + win + " historical figures out of 6");
                    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
                    win = 0;
                   
                    playnum = 0;
                    source.removeChild(imag);
                    pickperson();
    
    
    
                }

                setTimeout(function () {
                    source.removeChild(imag);
                    rem = 12;
                    document.getElementById("remaining").innerHTML = rem;
                    pickperson();
                }, 500)



            }




        }



    }




    function galileo() {
        document.getElementById("already").innerHTML = "";
        var imag = document.createElement("img");
        imag.src = "assets/images/gali.jpg";
        imag.width = 350;
        imag.height = 392;

        var source = document.getElementById("x");
        source.appendChild(imag);


        var name = ["g", "a", "l", "i", "l", "e", "o"];
        var nameD = ["-", "-", "-", "-", "-", "-", "-"];
        var wint = false;
        var rem = 12;
        var currentWord = document.getElementById("current");
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5] + nameD[6];

        document.onkeyup = function () {
            var guess = event.key;


            document.getElementById("already").innerHTML += guess;



            rem--;
            document.getElementById("remaining").innerHTML = rem;
            var typed = event.key;
            console.log(typed);
            for (i = 0; i < name.length; i++) {
                if (typed == name[i]) {
                    nameD[i] = typed;
                    name[i] = "-";
                    break;
                }




            }
            if (name[0] == "-" && name[1] == "-" && name[2] == "-" && name[3] == "-" && name[4] == "-" && name[5] == "-" && name[6] == "-") {
                wint = true;
                win++;
                

            }
            currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5] + nameD[6];
            document.getElementById("win").innerHTML = win;
            console.log(win);

           
            if (wint == true || rem == 0) {
                playnum++;
                if (playnum == 6) {
                    alert("you guessed " + win + " historical figures out of 6");
                    person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
                    win = 0;
                   
                    playnum = 0;
                    source.removeChild(imag);
                    pickperson();
    
    
    
                }

                setTimeout(function () {
                    source.removeChild(imag);
                    rem = 12;
                    document.getElementById("remaining").innerHTML = rem;
                    pickperson();
                }, 500)



            }




        }



    }
}