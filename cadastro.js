// Seleciona o formulário e os campos pelo ID
const form = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const senha = document.getElementById("senha");
const confirmsenha = document.getElementById("confirmar");

// Evento que entende o envio do formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário
  validarCampos(); // Chama a função que faz todas as validações
});

// Mostra a mensagem de erro e estiliza o input com class "invalido"
function mostrarErro(input, mensagem) {
  const campo = input.parentElement; // Pega a div .campo que envolve o input
  const erro = campo.querySelector(".erro"); // Seleciona o <small> onde a mensagem será exibida
  erro.innerText = mensagem; // Define o texto do erro
  erro.style.display = "block"; // Torna o erro visível
  input.classList.add("invalido"); // Adiciona borda vermelha no input
}

// Limpa o erro e remove a estilizalção de input inválido
function limparErro(input) {
  const campo = input.parentElement;
  const erro = campo.querySelector(".erro");
  erro.innerText = ""; // Limpa o texto de erro
  erro.style.display = "None"; // Esconde a mensagem de erro
  input.classList.remove("invalido"); // Remove a borda vermelha
}

// Auto-explicativo
function validarCampos() {
  // Validação do Nome (mínimo 3 letras)
  if (nome.value.trim().length < 3) {
    mostrarErro(nome, "Nome deve ter pelo menos 3 letras");
  } else {
    limparErro(nome);
  }

  // Validação do email usando expressão regular
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    mostrarErro(email, "Email inválido.");
  } else {
    limparErro(email);
  }

  // Validação do CPF (formato 000.000.000-00)
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!regexCPF.test(cpf.value)) {
    mostrarErro(cpf, "O CPF deve estar nesse formato 000.000.000-00");
  } else {
    limparErro(cpf);
  }

  // Validação da Senha (mínimo 6 caracteres com letras, números e caractere especial)
  const regexSenha =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!regexSenha.test(senha.value)) {
    mostrarErro(
      senha,
      "A senha deve conter ao menos 6 caracteres, com letras, números e ao menos um caractere especial."
    );
  } else {
    limparErro(senha);
  }

  // Validação da Confirmalçao de Senha (deve ser igual à senha)
  if (senha.value != confirmsenha.value) {
    mostrarErro(confirmsenha, "As senhas não coincidem.");
  } else {
    limparErro(confirmsenha);
  }

  if (
    nome.value.trim().length >= 3 &&
    regexEmail.test(email.value) &&
    regexCPF.test(cpf.value) &&
    regexSenha.test(senha.value) &&
    senha.value === confirmar.value
  ) {
    const usuario = {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    };

    // Salva o usuário no localStorage
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

    // Exibe mensagem e redireciona para login.html
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html"; // <-- Redirecionamento simples
  }
}
