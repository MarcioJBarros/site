function buscarCEP() {
  const cep = document.getElementById("cep").value;
  const resultado = document.getElementById("resultado");

  if (cep.length !== 8) {
    resultado.innerHTML = "❌ CEP inválido";
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        resultado.innerHTML = "❌ CEP não encontrado";
      } else {
        resultado.innerHTML = `
          <p><b>Logradouro:</b> ${dados.logradouro}</p>
          <p><b>Bairro:</b> ${dados.bairro}</p>
          <p><b>Cidade:</b> ${dados.localidade}</p>
          <p><b>UF:</b> ${dados.uf}</p>
        `;
      }
    })
    .catch(() => {
      resultado.innerHTML = "⚠️ Erro ao consultar a API";
    });
}
