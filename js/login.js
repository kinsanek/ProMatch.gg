document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const usuario = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    
    if (usuario && usuario.email === email && usuario.senha === senha) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "index.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});