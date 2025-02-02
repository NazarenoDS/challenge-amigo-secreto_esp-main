let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    if(amigo === "") {
        alert ("Por favor, ingrese un nombre de amigo");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
} 

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = amigoSorteado;
    amigos = amigos.filter(amigo => amigo !== amigoSorteado);
    mostrarAmigos();
}

