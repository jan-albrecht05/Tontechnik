function opentab1(){
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("for1").style.backgroundColor = "#323232";
    document.getElementById("for1").style.textDecoration = "underline";
    document.getElementById("for2").style.textDecoration = "none";
    document.getElementById("for2").style.backgroundColor = "#545454";
}

function opentab2(){
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "block";
    document.getElementById("for2").style.backgroundColor = "#323232";
    document.getElementById("for2").style.textDecoration = "underline";
    document.getElementById("for1").style.textDecoration = "none";
    document.getElementById("for1").style.backgroundColor = "#545454";
}