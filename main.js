let mainMenu = document.querySelector('#mainMenu')
let openMenu = document.querySelector('#openMenu')
let closeMenu = document.querySelector('#closeMenu')

openMenu.addEventListener('click', ()=>{
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
})

closeMenu.addEventListener('click', ()=>{
    mainMenu.style.right = '-80%';
})