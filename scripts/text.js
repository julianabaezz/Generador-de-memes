// ------ASIDE
// --TEXTO
const asideTxt = document.querySelector ('.aside-txt')
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