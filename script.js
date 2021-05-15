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


