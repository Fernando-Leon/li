var spa = 250;//Velocidad 1
var spt = 150;//Velocidad 2

function dataId(id, speeded){
    var text = document.getElementById(id);
    var str = text.innerHTML;
    text.innerHTML = "";
    var speed = speeded;
    var i = 0;
   
    function typeWrite(){
        if(i < str.length){
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWrite, speed);
        }
    }
    setTimeout(typeWrite, speed);
}

dataId("title", spt);