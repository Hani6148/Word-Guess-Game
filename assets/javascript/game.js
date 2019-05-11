var person = ["davinci", "tesla", "plato", "newton", "darwin", "galileo"];
var win=0;
var ran = Math.floor(Math.random() * person.length);
console.log(ran);
var picked = person[ran];
console.log(picked);
if (picked == "davinci")
{
    davinci();

}
if(picked=="tesla"){
    tesla();
}
if(picked=="plato"){
    plato();

}
if(picked=="newton"){
    newton();

}
if(picked=="darwin"){
    darwin();

}
if(picked=="galileo"){
    galileo();

}



function davinci() {
    console.log(person[0])
    var removed=person.splice(ran,1);
    console.log(person[0])

    var imag = document.createElement("img");
    imag.src = "assets/images/davinci.jpg";
    var source = document.getElementById("x");
    source.appendChild(imag);

    

    var name = ["d", "a", "v", "i", "n", "c", "i"];
    var nameD = ["-", "-", "-", "-", "-", "-", "-"];
    var winP = false;
    var rem = 12;
    var currentWord = document.getElementById("current");
    
    document.onkeyup = function () {

        
        

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
        if (name[0]=="-" && name[1]=="-"&& name[2]=="-"&& name[3]=="-"&& name[4]=="-"&& name[5]=="-"&& name[6]=="-"){
            winP=true;
            win++;

        }
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4] + nameD[5] + nameD[6];
        document.getElementById("win").innerHTML=win;
        document.getElementById("remaining").innerHTML=rem;
        console.log(win);
        if(winP==true || rem==0){
            setTimeout (function(){
                source.removeChild(imag);
                rem=12;
                document.getElementById("remaining").innerHTML=rem;
                
                
            },500)
            

        }

        



    }



}

function tesla() {
    var imag = document.createElement("img");
    imag.src = "assets/images/tesla.jpg";
    imag.width=350;
    imag.height=392;
    var source = document.getElementById("x");
    source.appendChild(imag);

    
    var name = ["t", "e", "s", "l", "a"];
    var nameD = ["-", "-", "-", "-", "-"];
    var wint = false;
    var rem = 12;
    var currentWord = document.getElementById("current");
    currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];
    
    document.onkeyup = function () {

        
        

        rem--;
        document.getElementById("remaining").innerHTML=rem;
        var typed = event.key;
        console.log(typed);
        for (i = 0; i < name.length; i++) {
            if (typed == name[i]) {
                nameD[i] = typed;
                name[i] = "-";
                break;
                }
            
            


        }
        if (name[0]=="-" && name[1]=="-"&& name[2]=="-"&& name[3]=="-"&& name[4]=="-"){
            wint=true;
            win++;

        }
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];
        document.getElementById("win").innerHTML=win;
        console.log(win);
       
        


    
    if(wint==true || rem==0){
            
            
        setTimeout (function(){
            source.removeChild(imag);
            rem=12;
            document.getElementById("remaining").innerHTML=rem;
            newton();
        },500)


    }
    



}}

function newton() {
    var imag = document.createElement("img");
    imag.src = "assets/images/newton.jpg";
    imag.width=350;
    imag.height=392;

    var source = document.getElementById("x");
    source.appendChild(imag);


    var name = ["n", "e", "w", "t", "o","n"];
    var nameD = ["-", "-", "-", "-", "-", "-"];
    var wint = false;
    var rem = 12;
    var currentWord = document.getElementById("current");
    currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4]+nameD[5];
    
    document.onkeyup = function () {

        
        

        rem--;
        document.getElementById("remaining").innerHTML=rem;
        var typed = event.key;
        console.log(typed);
        for (i = 0; i < name.length; i++) {
            if (typed == name[i]) {
                nameD[i] = typed;
                name[i] = "-";
                break;
                }
            
            


        }
        if (name[0]=="-" && name[1]=="-"&& name[2]=="-"&& name[3]=="-"&& name[4]=="-"&& name[5]=="-"){
            wint=true;
            win++;

        }
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4]+nameD[5];
        document.getElementById("win").innerHTML=win;
        console.log(win);
        if(wint==true || rem==0){
            
            
            setTimeout (function(){
                source.removeChild(imag);
                rem=12;
                document.getElementById("remaining").innerHTML=rem;
                darwin();
            },500)
    
        }
       



    }



}





function darwin() {
    var imag = document.createElement("img");
    imag.src = "assets/images/darwin.jpg";
    imag.width=350;
    imag.height=392;

    var source = document.getElementById("x");
    source.appendChild(imag);


    var name = ["d", "a", "r", "w", "i","n"];
    var nameD = ["-", "-", "-", "-", "-", "-"];
    var wint = false;
    var rem = 12;
    var currentWord = document.getElementById("current");
    currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4]+nameD[5];
    
    document.onkeyup = function () {

        
        

        rem--;
        document.getElementById("remaining").innerHTML=rem;
        var typed = event.key;
        console.log(typed);
        for (i = 0; i < name.length; i++) {
            if (typed == name[i]) {
                nameD[i] = typed;
                name[i] = "-";
                break;
                }
            
            


        }
        if (name[0]=="-" && name[1]=="-"&& name[2]=="-"&& name[3]=="-"&& name[4]=="-"&& name[5]=="-"){
            wint=true;
            win++;

        }
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4]+nameD[5];
        document.getElementById("win").innerHTML=win;
        console.log(win);
        
        
        if(wint==true || rem==0){
            
            setTimeout (function(){
                source.removeChild(imag);
                rem=12;
                document.getElementById("remaining").innerHTML=rem;
                plato();
            },500)
            
    
    
        }
       



    }



}






function plato() {
    var imag = document.createElement("img");
    imag.src = "assets/images/plato.jpg";
    imag.width=350;
    imag.height=392;

    var source = document.getElementById("x");
    source.appendChild(imag);


    var name = ["p", "l", "a", "t", "o"];
    var nameD = ["-", "-", "-", "-", "-"];
    var wint = false;
    var rem = 12;
    var currentWord = document.getElementById("current");
    currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];
    
    document.onkeyup = function () {

        
        

        rem--;
        document.getElementById("remaining").innerHTML=rem;
        var typed = event.key;
        console.log(typed);
        for (i = 0; i < name.length; i++) {
            if (typed == name[i]) {
                nameD[i] = typed;
                name[i] = "-";
                break;
                }
            
            


        }
        if (name[0]=="-" && name[1]=="-"&& name[2]=="-"&& name[3]=="-"&& name[4]=="-"){
            wint=true;
            win++;

        }
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4];
        document.getElementById("win").innerHTML=win;
        console.log(win);
        
        
        if(wint==true || rem==0){
            
            setTimeout (function(){
                source.removeChild(imag);
                rem=12;
                document.getElementById("remaining").innerHTML=rem;
                galileo();
            },500)
            
    
    
        }
       



    }



}




function galileo() {
    var imag = document.createElement("img");
    imag.src = "assets/images/gali.jpg";
    imag.width=350;
    imag.height=392;

    var source = document.getElementById("x");
    source.appendChild(imag);


    var name = ["g", "a", "l", "i", "l","e","o"];
    var nameD = ["-", "-", "-", "-", "-", "-","-"];
    var wint = false;
    var rem = 12;
    var currentWord = document.getElementById("current");
    currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4]+nameD[5]+nameD[6];
    
    document.onkeyup = function () {

        
        

        rem--;
        document.getElementById("remaining").innerHTML=rem;
        var typed = event.key;
        console.log(typed);
        for (i = 0; i < name.length; i++) {
            if (typed == name[i]) {
                nameD[i] = typed;
                name[i] = "-";
                break;
                }
            
            


        }
        if (name[0]=="-" && name[1]=="-"&& name[2]=="-"&& name[3]=="-"&& name[4]=="-"&& name[5]=="-"&& name[6]=="-"){
            wint=true;
            win++;

        }
        currentWord.innerHTML = nameD[0] + nameD[1] + nameD[2] + nameD[3] + nameD[4]+nameD[5]+nameD[6];
        document.getElementById("win").innerHTML=win;
        console.log(win);
        
        
        if(wint==true || rem==0){
            
            setTimeout (function(){
                source.removeChild(imag);
                rem=12;
                document.getElementById("remaining").innerHTML=rem;
                plato();
            },500)
            
    
    
        }
       



    }



}