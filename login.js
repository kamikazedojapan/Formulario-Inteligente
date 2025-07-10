const formLogin = document.getElementById("form-login");
const inputEmail = document.getElementById("login-email");
const inputSenha = document.getElementById("login-senha");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailDigitado = inputEmail.value;
  const senhaDigitada = inputSenha.value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado.");
    return;
  }

  if (
    emailDigitado === usuarioSalvo.email &&
    senhaDigitada === usuarioSalvo.senha
  ) {
    alert("Login realizado com sucesso!");
    // Aqui você pode redirecionar para a página principal, por exemplo:
    // window.location.href = "dashboard.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
});
