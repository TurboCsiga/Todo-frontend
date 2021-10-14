function general(){
    let beText = document.getElementById("beText");
    let ujSor = document.createElement("div");
    ujSor.className = "sor";
    let checkBox = document.createElement("input");
   checkBox.type = "checkbox";
   checkBox.addEventListener("click", pipa);
   ujSor.appendChild(checkBox);
    let szoveg = document.createElement("label");
    szoveg.innerHTML = beText.value;
    ujSor.appendChild(szoveg);
    let x = document.createElement("label");
    x.innerHTML = "X";
    x.className = "X";
     x.addEventListener("click", torol);
    ujSor.appendChild(x);
    document.getElementById("lista").appendChild(ujSor);
    beText.value = "";
}

function pipa(e){
    let sor = e.target.parentNode;
    let szoveg = sor.getElementsByTagName("label")[0];
    szoveg.classList.toggle("kihuz");
}

function torol(e){
    e.target.parentNode.remove();
}

function init(){
    document.getElementById("hozzaAd").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded", init);
