var person=["davinci","tesla","aristotle","newton","darwin","confiscus","khawarizmi"];
var ran = Math.floor(Math.random() * person.length);
console.log(ran);
var picked=person[ran];
console.log(picked);
if(picked=="davinci")
    davinci();
    
// }
// if(picked=="tesla"){
//     tesla();
// }
// if(picked=="aristotle"){
//     aris();
    
// }
// if(picked=="newton"){
//     newton();
    
// }
// if(picked=="darwin"){
//     darwin();
    
// }
// if(picked=="confiscus"){
//     conf();
    
// }
// if(picked=="khawarizmi"){
//     khawa();
    
// }


function davinci(){
    var img = document.createElement("img");
    img.src = "assets/images/davinci.jpg";
    var src = document.getElementById("x");
    src.appendChild(img);
    
    var name=["d","a","v","i","n","c","i"];
    var nameD=["-","-","-","-","-","-","-"];
    
    document.onkeyup=function(){
        
    var rem=12;
    win=false;
    var currentWord=document.getElementById("current");
    currentWord.innerHTML=nameD[0]+nameD[1]+nameD[2]+nameD[3]+nameD[4]+nameD[5]+nameD[6];
        rem--;
        var typed=event.key;
        console.log(typed);
        for(i=0;i<name.length;i++){
            if(typed==name[i]){
                nameD[i]=typed;
                name[i]="-";}
                
                
        }



    }
    

    
}
