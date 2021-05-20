// ------ASIDE
// --TEXTO
const asideTxt = document.querySelector ('.aside-txt')
const topText = document.getElementById("top-text")
const bottomText = document.getElementById("bottom-text")
const topImage = document.querySelector(".top-text")
const bottomImage = document.querySelector(".bottom-text")
const checkTopText = document.getElementById("check-top-text")
const checkBottomText = document.getElementById("check-bottom-text")
const textFontTop = document.getElementById('textFontTop')
const textFontBottom = document.getElementById('textFontBottom')
const optionTextFont = document.getElementById('optionTextFont')
const fontSize = document.getElementById('fontSize')


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

optionTextFont.addEventListener('change', () => {
    textFontTop.style.fontFamily = optionTextFont.value;
    textFontBottom.style.fontFamily = optionTextFont.value;    
})

fontSize.addEventListener('change', () => {
    console.log(fontSize.value);
    textFontTop.style.fontSize= fontSize.value+'px';
    textFontBottom.style.fontSize = fontSize.value+'px';    
})

