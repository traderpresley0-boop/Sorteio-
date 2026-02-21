// CADASTRO
const formCadastro = document.getElementById("cadastro");

if (formCadastro) {
formCadastro.addEventListener("submit", function(e) {
e.preventDefault();

const user = {
nome: document.getElementById("nome").value,
email: document.getElementById("email").value,
telefone: document.getElementById("telefone").value,
senha: document.getElementById("senha").value
};

localStorage.setItem("usuario", JSON.stringify(user));

alert("Conta criada com sucesso!");
window.location.href = "login.html";
});
}

// LOGIN
const formLogin = document.getElementById("login");

if (formLogin) {
formLogin.addEventListener("submit", function(e) {
e.preventDefault();

const email = document.getElementById("loginEmail").value;
const senha = document.getElementById("loginSenha").value;

const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
alert("Nenhuma conta encontrada!");
return;
}

// ADMIN (teu acesso especial)
if (email === "
