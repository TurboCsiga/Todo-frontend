function general(){
    let beText = document.getElementById("beText");
    let ujSor = document.createElement("div");
    ujSor.className = "sor";
    let Box = document.createElement("beText");
    Box.type = "checkbox";
    ujSor.appendChild(Box);
    let szoveg = document.createElement("label");
    szoveg.innerHTML = beText.value;
    ujSor.appendChild(szoveg);
    let x = document.createElement("label");
    x.innerHTML = "X";
    x.className = "X";
    ujSor.appendChild(x);
    document.getElementById("lista").appendChild(ujSor);
    beText.value = "";
}

function init(){
    document.getElementById("hozzaAd").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded", init);