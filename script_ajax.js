function carregarUsuarios() {
  const tbody = document.getElementById("tabelaUsuarios");
  tbody.innerHTML = "<tr><td colspan='3'>Carregando...</td></tr>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usuarios => {
      tbody.innerHTML = "";

      usuarios.forEach(user => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
        `;

        tbody.appendChild(tr);
      });
    })
    .catch(() => {
      tbody.innerHTML = "<tr><td colspan='3'>Erro ao carregar dados</td></tr>";
    });
}
