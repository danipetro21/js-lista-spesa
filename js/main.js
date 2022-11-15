// Consegna:
// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).


let listaSpesa = ["pomodori", "lattuga", "pane", "latte", "acqua", "carne", "cioccolata", "detersivo"];
let list = document.querySelector("ol");

// FOR
for (let i = 0; i < listaSpesa.length; i++) {
    list.innerHTML += `<li>${listaSpesa[i]}</li>`
}


let i = listaSpesa.length;
function aggiungi() {
    let input = document.getElementById("add").value;
    listaSpesa.push(input);
    while (i < listaSpesa.length) {
        list.innerHTML += `<li>${listaSpesa[i]}</li>`
        i++
    }

    if(i == 20){
        alert("SI! MA STAI CALMO!! TROPPI PRODOTTI")
    }
}




