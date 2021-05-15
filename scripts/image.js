// ------ASIDE
// --IMAGEN
const asideImg = document.querySelector ('.aside-img')
const url = document.getElementById ('url')
const image = document.querySelector ('.image')
const imgColor= document.getElementById ('img-color')
const optionsFilterBg= document.getElementById ('options-filter-bg')
const inputRange= document.getElementsByClassName ('input-range')
const brightnessFilter= document.getElementById('brightness')
const opacityFilter = document.getElementById('opacity')
const contrastFilter =document.getElementById ('contrast')
url.addEventListener ('change',  () => {
    image.style.backgroundImage= (`url("${url.value}")`);
    image.style.backgroundSize= 'cover'
    image.style.backgroundPosition= 'center'

})
imgColor.addEventListener ('input', () =>{
    image.style.backgroundColor=(`${imgColor.value}`)
})

optionsFilterBg.addEventListener('change', () => {
    console.log(optionsFilterBg.value)
    image.style.backgroundBlendMode = optionsFilterBg.value;

})
const updateFilter = () => {
    image.style.filter= `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%)`
}
brightnessFilter.addEventListener('input', updateFilter)
opacityFilter.addEventListener('input', updateFilter)
contrastFilter.addEventListener ('input', updateFilter)





