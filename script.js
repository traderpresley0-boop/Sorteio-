function criarConta(){

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

if(!nome || !email || !senha){
document.getElementById("msg").innerText="Preencha tudo";
return;
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let existe = usuarios.find(u => u.email === email);

if(existe){
document.getElementById("msg").innerText="Email já cadastrado";
return;
}

usuarios.push({
nome,
email,
senha,
pagamento:"nao"
});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

document.getElementById("msg").innerText="Conta criada! Faça login.";

}

function entrar(){

let email = document.getElementById("emailLogin").value;
let senha = document.getElementById("senhaLogin").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuario = usuarios.find(u => u.email === email && u.senha === senha);

if(usuario){
localStorage.setItem("logado","true");
localStorage.setItem("usuarioAtual", email);
window.location.href="conta.html";
}else{
document.getElementById("msg").innerText="Email ou senha errados";
}

}
