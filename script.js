// criar conta
function criarConta() {
  const nome = document.querySelector("input[placeholder='Nome']")?.value || document.querySelector("input[type='text']").value
  const email = document.querySelector("input[type='email']").value
  const telefone = document.querySelector("input[placeholder='Telefone']").value
  const senha = document.querySelector("input[type='password']").value

  if (!nome || !email || !telefone || !senha) {
    alert("Preencha todos os campos")
    return
  }

  const usuario = { nome, email, telefone, senha }

  localStorage.setItem("usuario", JSON.stringify(usuario))

  alert("Conta criada com sucesso! Agora faça login.")

  // vai para página de login
  window.location.href = "login.html"
}
