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
let topbtn = document.querySelector('.topbtn')

topbtn.addEventListener('mouseover', ()=>{
    let tooltip = document.querySelector('#tooltip') 
    tooltip.style.transition = 'opacity 1s ease-in-out'
    tooltip.style.display = 'block'
    setTimeout(()=>{
        tooltip.style.display = 'none'
    }, 3000)
})

document.addEventListener('scroll', ()=>{
    let header = document.getElementsByTagName('header');
    let logo = document.getElementsByClassName('logo')
    let ttip = document.querySelector('.tooltip')

    if(window.scrollY > 100){
        ttip.style.display = 'flex'
    }else{
        ttip.style.display = 'none'
    }
    if(window.scrollY > 50){
        header[0].style.transition = '0.5s'
        header[0].style.backgroundColor = '#fb5607'
        openMenu.style.color = '#f5ebe0'
        logo[0].style.color = '#f5ebe0'
        changeColor('#f5ebe0')
    }
    else{
        header[0].style.transition = '0.5s'
        header[0].style.backgroundColor = '#f5ebe0'
        openMenu.style.color = '#fb5607'
        logo[0].style.color = '#7209b7'
        changeColor('#fb5607')
    }
})

function changeColor(color){
    if(document.body.clientWidth > 950){
        let links = mainMenu.getElementsByTagName('a')
        for(let i=0; i<links.length; i++){
            links[i].style.color = color
        }
    }
}

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
    // console.log(element)
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