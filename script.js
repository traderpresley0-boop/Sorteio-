function criarConta(){

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

if(!nome || !email || !senha){
document.getElementById("msg").innerText="Preencha tudo";
return;
}

let usuario = {nome,email,senha};

localStorage.setItem("usuario", JSON.stringify(usuario));

document.getElementById("msg").innerText="Conta criada! Agora faça login.";

}

function entrar(){

let email = document.getElementById("emailLogin").value;
let senha = document.getElementById("senhaLogin").value;

let usuario = JSON.parse(localStorage.getItem("usuario"));

if(!usuario){
document.getElementById("msg").innerText="Nenhuma conta criada";
return;
}

if(email === usuario.email && senha === usuario.senha){

localStorage.setItem("logado","true");
window.location.href="conta.html";

}else{
document.getElementById("msg").innerText="Email ou senha errados";
}

}
