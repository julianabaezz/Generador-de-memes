// ------ASIDE
// --IMAGEN
const asideImg = document.querySelector('.aside-img')
const url = document.getElementById('url')
const image = document.querySelector('.image')
const imgColor = document.getElementById('img-color')
const optionsFilterBg = document.getElementById('options-filter-bg')
const brightnessFilter = document.getElementById('brightness')
const opacityFilter = document.getElementById('opacity')
const contrastFilter = document.getElementById('contrast')
const blurFilter = document.getElementById('blur')
const grayscaleFilter = document.getElementById('grayscale')
const sepiaFilter = document.getElementById('sepia')
const hueFilter = document.getElementById('hue')
const saturateFilter = document.getElementById('saturate')
const invertFilter = document.getElementById('invert')
const resetBtn = document.getElementById('reset-btn')
const imageForm = document.getElementById('imageForm')
const textInputColor = document.getElementById("text-input-color")
const contInputColor = document.getElementById("cont-input")

contInputColor.addEventListener("click", () => {
    imgColor.click()
})

url.addEventListener('change', () => {
    image.style.backgroundImage = (`url("${url.value}")`)
    image.style.backgroundSize = 'cover'
    image.style.backgroundPosition = 'center'
})

const updateColor = () => {
    image.style.backgroundColor = (`${imgColor.value}`)
    textInputColor.innerText = `${imgColor.value}`
}

imgColor.addEventListener('input', updateColor)

optionsFilterBg.addEventListener('change', () => {
    image.style.backgroundBlendMode = optionsFilterBg.value

})
const updateFilter = () => {
    image.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) invert(${invertFilter.value})`
}
brightnessFilter.addEventListener('input', updateFilter)
opacityFilter.addEventListener('input', updateFilter)
contrastFilter.addEventListener('input', updateFilter)
blurFilter.addEventListener('input', updateFilter)
grayscaleFilter.addEventListener('input', updateFilter)
sepiaFilter.addEventListener('input', updateFilter)
hueFilter.addEventListener('input', updateFilter)
saturateFilter.addEventListener('input', updateFilter)
invertFilter.addEventListener('input', updateFilter)

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    imageForm.reset()
    updateFilter()
    updateColor()
})


