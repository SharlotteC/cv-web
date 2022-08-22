let nmbPhoto;
let tarifTotal;
let button = document.querySelector("#valider");
let response = document.querySelector("#response");

function total(e){
    nmbPhoto = document.getElementById("nombre").value;
    if(nmbPhoto <= 10) {
        tarifTotal = nmbPhoto * 0.1;
    }else if(nmbPhoto <= 30){
        tarifTotal = nmbPhoto * 0.1 + (nmbPhoto - 10) * 0.09;
    }else{
        tarifTotal = nmbPhoto * 0.1 + 20 * 0.09 + (nmbPhoto - 30) * 0.08;
    }
    let tarif = tarifTotal.toFixed(2)
    response.innerHTML = "Vous devez " + tarif + " € ";
    e.preventDefault();   
}
valider.addEventListener("click", total)