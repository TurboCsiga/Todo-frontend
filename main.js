function general(){
    document.getElementById("lista").innerHTML = "";

    let lista = document.getElementById("beText").value;
    let table = document.createElement("table");
    let li = document.createElement("li");
    input.type = "checkbox";

    table.appendChild(li);
    li.appendChild(beText);
    document.getElementById("lista").appendChild(li);
}

function init(){
    document.getElementById("hozzaAd").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded", init);