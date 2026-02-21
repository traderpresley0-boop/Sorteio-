document.getElementById("cadastro").addEventListener("submit", function(e){
e.preventDefault();

// guarda dados (simples)
let usuario = {
nome: document.getElementById("nome").value,
email: document.getElementById("email").value,
telefone: document.getElementById("telefone").value
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// vai para próxima página
window.location.href = "participar.html";
});
