//El objetivo principal de este desafío es fortalecer tus habilidades lógicas de programación.
//Aquí debes desarrollar la lógica para resolver el problema.

const amigos = [];

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    if (!lista) {
        console.error('Elemento con id "listaAmigos" no encontrado.');
        return;
    }
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    if (!input) {
        console.error('Elemento con id "amigo" no encontrado.');
        return;
    }
    const nombreAmigo = input.value.trim();
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        actualizarLista();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function sortearAmigos() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para hacer el sorteo.");
        return;
    }

    let sorteados = [...amigos];
    sorteados = sorteados.sort(() => Math.random() - 0.5);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const giver = amigos[i];
        const receiver = sorteados[i === amigos.length - 1 ? 0 : i + 1];

        const li = document.createElement("li");
        li.textContent = `${giver} → ${receiver}`;
        resultado.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigos);
});
