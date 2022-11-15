// Consegna:
// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).


let listaSpesa = ["pomodori", "lattuga", "pane", "latte", "acqua", "carne", "cioccolata", "detersivo"];
let list = document.querySelector("ol");
let i = 0;
// // FOR
// for (let i = 0; i < listaSpesa.length; i++) {
//     list.innerHTML += `<li>${listaSpesa[i]}</li>`
// }

// WHILE
while (i < listaSpesa.length) {
    list.innerHTML += `<li>${listaSpesa[i]}</li>`
    i++
}


let j = listaSpesa.length;
let input;
function aggiungi() {
    input = document.getElementById("add").value;
    listaSpesa.push(input);
    list.innerHTML += `<li>${listaSpesa[j]}</li>`
    j++
    input.value = " ";

    if (j == 20) {
        alert("SI! MA STAI CALMO!! TROPPI PRODOTTI")
    }
}




