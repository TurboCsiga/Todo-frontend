function general(){
    document.getElementById("lista").innerHTML = "";

    let lista = document.getElementById("lista").value;
    let table = document.createElement("table");
    let li = document.createElement("li");
    table.appendChild(li);
}

function init(){
    document.getElementById("hozzaAd").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded", init);