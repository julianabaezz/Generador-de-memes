const btnImgAside = document.getElementById ('btn-img-aside')
const btnTxtAside = document.getElementById ('btn-txt-aside')
const btnTheme = document.getElementById ('btn-theme')
const asideTxt = document.querySelector ('.aside-txt')
const asideImg = document.querySelector ('.aside-img')
const textTheme = document.getElementById ('text-theme')
const url = document.getElementById ('url')
const image = document.querySelector ('.image')
const imgColor= document.getElementById ('img-color')
const optionsColor= document.getElementsByClassName ('options-color')
const body = document.body

// ------HEADER
// --Boton imagen
btnImgAside.addEventListener('click', ()=> {
    asideImg.classList.remove('hidden')
    asideTxt.classList.add('hidden')
})
// --Boton texto
btnTxtAside.addEventListener('click', ()=> {
    asideImg.classList.add('hidden')
    asideTxt.classList.remove('hidden')
})
// --Boton tema oscuro/claro
btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    if(body.className == 'dark'){
        textTheme.innerText="Modo claro"
    }else{
        textTheme.innerText="Modo oscuro"
    }
});

// ------ASIDE
// --Imagen
url.addEventListener ('change',  () => {
    image.style.backgroundImage= (`url("${url.value}")`);
    image.style.backgroundSize= 'cover'
})
imgColor.addEventListener ('input', () =>{
    image.style.backgroundColor=(`${imgColor.value}`)
})


// HOLA


// for (let i=0; i < optionsColor.length; i++){
//     const seleccionarFiltro = (e) =>{
//     if(value==lighten){
//             url.style.filter= 'brightness (150%)'
//         }
//     }
//     optionsColor.addEventListener ('click', seleccionarFiltro);
// }

// optionsColor.addEventListener ('click', () => {
//     for ( i=0; i < optionsColor.length; i++){
//         if(value==lighten){
//             url.style.filter= 'brightness (150%)'
//         }
//     }
// })



//PARTE DEL TEXTO 

const topText = document.getElementById("top-text")
const bottomText = document.getElementById("bottom-text")
const topImage = document.querySelector(".top-text")
const bottomImage = document.querySelector(".bottom-text")
const checkTopText = document.getElementById("check-top-text")
const checkBottomText = document.getElementById("check-bottom-text")


topText.addEventListener("keyup", (e) => {
    topImage.innerText = e.target.value
})

bottomText.addEventListener("keyup", (e) => {
    bottomImage.innerText = e.target.value
})

checkTopText.addEventListener("change", (e) => {
    if(e.target.checked){
        topImage.style.display = "none"
    }else{
        topImage.style.display = "flex"
    }
})

checkBottomText.addEventListener("change", (e) => {
    if(e.target.checked){
        bottomImage.style.display = "none"
    }else{
        bottomImage.style.display = "flex"
    }
})



