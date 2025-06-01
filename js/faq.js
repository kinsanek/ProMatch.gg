const perguntas = document.querySelectorAll('.faq-pergunta');

perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', () => {
        const isActive = pergunta.classList.contains('active');

        perguntas.forEach((q) => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('open');
        });

        if(!isActive){
            pergunta.classList.add('active');
           pergunta.nextElementSibling.classList.add('open');
        }
    });
});

const abrirAjuda = document.getElementById('abrirAjuda');
const formAjuda = document.getElementById('formAjuda');
const fecharAjuda = document.getElementById('fecharAjuda');

abrirAjuda.addEventListener('click',() =>{
    formAjuda.style.display = 'block';
});

fecharAjuda.addEventListener('click',() =>{
    formAjuda.style.display = 'none';
});

document.addEventListener('click',(e) =>{
    if(!document.getElementById('ajudaContainer').contains(e.target)&& formAjuda.style.display === 'block'){
        formAjuda.style.display = 'none'
    }
});