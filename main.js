let mainMenu = document.querySelector('#mainMenu')
let openMenu = document.querySelector('#openMenu')
let closeMenu = document.querySelector('#closeMenu')
let html = document.querySelector('#html')
let css = document.querySelector('#css')
let js = document.querySelector('#js')
let php = document.querySelector('#php')
let sql = document.querySelector('#sql')
let java = document.querySelector('#java')
let cpp = document.querySelector('#cpp')
let git = document.querySelector('#git')
let form = document.getElementById('form')

openMenu.addEventListener('click', ()=>{
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
})

closeMenu.addEventListener('click', ()=>{
    mainMenu.style.right = '-80%';
})

html.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

css.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

js.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

sql.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

php.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

java.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

git.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

cpp.addEventListener('mouseover', (e)=>{
    moveProgress(e.target.value, e.target)
})

function moveProgress(val, element){
    console.log(element)
    var id = setInterval(move, 100)
    let i = 0
    function move(){
        if(i >= val){
            clearInterval(id)
            i=0
        }else{
            i++
            element.style.value = i
        }
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let btn = document.getElementById('form-submit')
    btn.disabled = true
    fetch(form.action, {
        method:"POST",
        body: new FormData(document.getElementById('form')),
    }).then(
        response => response.json()
    ).then((html) =>{
        alert('Your query has been submitted.')
        btn.disabled = false
    })
    form.reset()
})