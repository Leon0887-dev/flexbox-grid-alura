
const btnMenu = document.querySelector('.cabecalho_menu');
const menuLateral = document.querySelector('.menu-lateral');
console.log(menuLateral)
btnMenu.addEventListener('click', (e) =>{
        menuLateral.classList.toggle('menu-lateral--ativo')
});