const btnImgAside = document.getElementById ('btn-img-aside')
const btnTxtAside = document.getElementById ('btn-txt-aside')
const btnTheme = document.getElementById ('btn-theme')
const asideTxt = document.querySelector ('.aside-txt')
const asideImg = document.querySelector ('.aside-img')
const body = document.body

btnImgAside.addEventListener('click', ()=> {
    asideImg.classList.remove('hidden')
    asideTxt.classList.add('hidden')
})
btnTxtAside.addEventListener('click', ()=> {
    asideImg.classList.add('hidden')
    asideTxt.classList.remove('hidden')
})
btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
});
