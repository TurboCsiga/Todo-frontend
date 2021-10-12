function general(){
    document.getElementById("lista").innerHTML = "";

    let lista = document.getElementById("beText").value;
    let li = document.createElement("li");
    input.type = "checkbox";
    
    lista.appendChild(li);
    li.appendChild(beText);
    document.getElementById("lista").appendChild(li);
}

function init(){
    document.getElementById("hozzaAd").addEventListener("click", general);
    document.getElementById("beText").addEventListener("input", general);
}
document.addEventListener("DOMContentLoaded", init);