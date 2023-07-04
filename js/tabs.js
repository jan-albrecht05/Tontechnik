function checkURL(){
    let page = window.location.search;
    if(page == "?events"){
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "block";
        document.getElementById("for1").style.backgroundColor = "#323232";
        document.getElementById("for2").style.backgroundColor = "var(--m-tabs)";
    }else{
        document.getElementById("tab1").style.display = "block";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("for2").style.backgroundColor = "#323232";
        document.getElementById("for1").style.backgroundColor = "var(--m-tabs)";
    }
}
function opentab1(){
    location = window.location.pathname+"?stunden";
}
function opentab2(){
    location = window.location.pathname+"?events";
}