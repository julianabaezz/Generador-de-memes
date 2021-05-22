const body = document.body
const btnImgAside = document.getElementById ('btn-img-aside')
const btnTxtAside = document.getElementById ('btn-txt-aside')
const btnTheme = document.getElementById ('btn-theme')
const textTheme = document.getElementById ('text-theme')
const downloadBtn = document.getElementById ('download-btn')

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

// --Boton descarga
downloadBtn.addEventListener ("click", ()=> {
domtoimage.toBlob(image)
    .then(function (blob) {
        window.saveAs(blob, 'meme.png');
    });
})