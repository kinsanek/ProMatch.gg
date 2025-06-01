const assinarBtns = document.querySelectorAll(".assinarBtn");

assinarBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
        let assinaturaSelecionada = "";
        const card = this.closest(".card-assinatura");

        if (card.id ==="bronze"){
            assinaturaSelecionada = "Bronze";
        } else if (card.id ==="prata"){
            assinaturaSelecionada = "Prata";
        }  else if (card.id ==="ouro"){
            assinaturaSelecionada = "Ouro";
        } 

        let usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

        if (usuarioLogado) {
            usuarioLogado.assinatura = assinaturaSelecionada;
            localStorage.setItem("usuario", JSON.stringify(usuarioLogado));

            let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
            if (usuarioCadastrado && usuarioCadastrado.email === usuarioLogado.email){
                usuarioCadastrado.assinatura = assinaturaSelecionada;
                localStorage.setItem("usuarioCadastrado", JSON.stringify(usuarioCadastrado))    ;
            }

            alert(`Você assinou o plano ${assinaturaSelecionada} com sucesso!`);
            location.reload();
        } else{
            alert("Você precisa estar logado para assinar um plano!");
        }
    });
});