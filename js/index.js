const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("cadastroBtn").style.display = "none";

    document.getElementById("userPhoto").src = usuario.foto || "../img/default-avatar.png";
    document.getElementById("username").textContent = usuario.username;
    document.getElementById("userInfo").style.display = "flex";

    const assinaturaUsuario = usuario.assinatura ? usuario.assinatura.toLowerCase() : 'nenhuma';
    document.getElementById("userPhoto").classList.add(`assinatura-${assinaturaUsuario}`); 

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("usuario");
        location.reload();
    })
}

function ajustarEscala() {
    const baseWidth = 1879;
    const baseHeight = 932;

    const escalaLargura = window.innerWidth / baseWidth;
    const escalaAltura = window.innerHeight / baseHeight;

    // Usa o menor dos dois para manter proporção
    const escalaFinal = Math.min(escalaLargura, escalaAltura);

    document.documentElement.style.setProperty('--scale', escalaFinal);
  }

  ajustarEscala();
  window.addEventListener('resize', ajustarEscala);