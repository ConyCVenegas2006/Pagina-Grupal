const formArticle = document.getElementById('formulario')
const formClose = document.getElementById('close')
const formOpen = document.getElementById('nav-a-3')



formClose.addEventListener('click', function(){
    formArticle.style.display = 'none'
})

formOpen.addEventListener('click', function(){
    formArticle.style.display = 'flex'
})