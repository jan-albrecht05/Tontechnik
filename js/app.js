var white = "#ffffff";
var black = "#262626";
var block = "block";
var none = "none";
var darkimg = "url(/img/Mixer.jpg)";
var lightimg = "url(/img/Mixer3.jpg)";
function changetodark(){
    document.getElementById("body").style.backgroundColor = black;
    document.getElementById("body").style.color = white;
    document.getElementById("body").style.backgroundImage = darkimg;
    document.getElementById("content").style.color = white;
    document.getElementById("forlight").style.display = block;
    document.getElementById("fordark").style.display = none;
    //document.getElementById("reiter").querySelector('.reiter').style.color = white;
}
function changetolight(){
    document.getElementById("body").style.backgroundColor = white;
    document.getElementById("body").style.color = black;
    document.getElementById("body").style.backgroundImage = lightimg;
    document.getElementById("content").style.color = black;
    document.getElementById("forlight").style.display = none;
    document.getElementById("fordark").style.display = block;
    //document.getElementById("navbar").querySelector('.reiter').style.color = white;
}