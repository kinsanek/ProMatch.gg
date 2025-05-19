document.getElementById("cadastro-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const username = document.getElementById("user-name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const foto = document.getElementById("foto").value || "../img/default-avatar.png";

    const usuario = { nome, username, email, senha, foto };

    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

    console.log(usuario);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
});