function verificar_email() {
  var email = email_input.value

  if (!email.includes('@') || !email.includes('.com')) {
    email_input.style.border = '1px solid #CC0000'
    span_email.style.display = 'block'
    span_email.style.visibility = 'visible'
  } else {
    email_input.style.border = '1px solid #EEEEEE'
    span_email.style.display = 'none'
    span_email.style.visibility = 'hidden'
  }
}

    function verificar_requisitos() {
  var senha = senha_input.value

  if (senha.length >= 8) {
    req_char.style.color = '#228B22'
    req_char.innerHTML = `<i class='bx bxs-like'></i>8 caracteres`
  } else {
    req_char.style.color = '#CC0000'
    req_char.innerHTML = `<i class='bx bxs-dislike'></i>8 caracteres`
  }

  if (senha != senha.toUpperCase()) {
    req_min.style.color = '#228B22'
    req_min.innerHTML = `<i class='bx bxs-like'></i>Letras minúsculas`
  } else {
    req_min.style.color = '#CC0000'
    req_min.innerHTML = `<i class='bx bxs-dislike'></i>Letras minúsculas`
  }

  if (senha != senha.toLowerCase()) {
    req_mai.style.color = '#228B22'
    req_mai.innerHTML = `<i class='bx bxs-like'></i>Letras maiúsculas`
  } else {
    req_mai.style.color = '#CC0000'
    req_mai.innerHTML = `<i class='bx bxs-dislike'></i>Letras maiúsculas`
  }

  if (senha.includes('@') || senha.includes('#') || senha.includes('$') || senha.includes('%') || senha.includes('&') || senha.includes('_')) {
    req_esp.style.color = '#228B22'
    req_esp.innerHTML = `<i class='bx bxs-like'></i>Caractere especial`
  } else {
    req_esp.style.color = '#CC0000'
    req_esp.innerHTML = `<i class='bx bxs-dislike'></i>Caractere especial`
  }
}
function verificar_senha() {
  var senha = senha_input.value
  var conf_senha = confirmacao_senha_input.value

  if (senha != conf_senha) {
    confirmacao_senha_input.style.border = '1px solid #CC0000'
    span_senha.style.display = 'block'
    span_senha.style.visibility = 'visible'
  } else {
    confirmacao_senha_input.style.border = '1px solid #EEEEEE'
    span_senha.style.display = 'none'
    span_senha.style.visibility = 'hidden'
  }
}
// /usuarios/cadastrar
function cadastrar() {
  var nome = nome_input.value
  var telefone = Telefone_input.value
  var senha = confirmacao_senha_input.value
  var confSenha = confirmacao_senha_input.value
  var email = email_input.value

  if (nome === '' || telefone === '' || senha === '' || confSenha === '' || email === '') {
    alert('Todos os campos devem ser preenchidos')
    return
  }

  if (senha !== confSenha) {
    alert('As senhas devem ser iguais')
    return
  }

  if (!(email.includes('@') && email.includes('.com'))) {
    alert('Email inválido')
    return
  }

  fetch('http://localhost:3333/usuarios/cadastrar', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeServer: nome,
      telefoneServer: telefone,
      senhaServer: senha,
      emailServer: email
    }),
  }).then(function (resposta) {
    if (resposta.ok) {
      alert('Cadastro realizado com sucesso!')
      window.location.href = 'Login.html'
    } else {
      alert('Problema ao realizar cadastro')
    }
  })

}