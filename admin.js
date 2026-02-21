const senhaCorreta = "admin123";

function entrar(){
let senha = document.getElementById("senhaAdmin").value;

if(senha === senhaCorreta){
document.getElementById("login").style.display="none";
document.getElementById("painel").style.display="block";
mostrarUsuarios();
}else{
document.getElementById("erro").innerText="Senha errada";
}
}

function logout(){
location.reload();
}

function mostrarUsuarios(){
let dados = localStorage.getItem("usuario");

if(dados){
let usuario = JSON.parse(dados);

let lista = document.getElementById("lista");
let li = document.createElement("li");

li.textContent =
usuario.nome + " - " + usuario.telefone;

lista.appendChild(li);
}
}
