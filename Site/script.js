var ul = document.querySelector('#menu ul')
var menuIcon = document.querySelector('.menuBTN i')
var menu = document.getElementById('menu')

function chamarMenu(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open')
        menuIcon.style.color = 'black'
    }else{
        ul.classList.add('open')
        menuIcon.style.color = 'red'
    }
}
function fecharUl(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open')
        menuIcon.style.color='black'
    }else{
        ul.classList.add('open')
        menuIcon.style.color='red'
    }
}