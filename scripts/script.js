const body = document.body
const btnImgAside = document.getElementById("btn-img-aside")
const btnTxtAside = document.getElementById("btn-txt-aside")
const btnTheme = document.getElementById("btn-theme")
const textTheme = document.getElementById("text-theme")
const downloadBtn = document.getElementById("download-btn")
const contImage = document.querySelector('.wrapper')
const closeAside = document.getElementById('close-aside')
const aside = document.querySelector('.aside')

// ------HEADER
// --Boton imagen
btnImgAside.addEventListener("click", () => {
	aside.classList.remove('hidden')
	asideImg.classList.remove("hidden")
	asideTxt.classList.add("hidden")

})
// --Boton texto
btnTxtAside.addEventListener("click", () => {
	aside.classList.remove('hidden')
	asideImg.classList.add("hidden")
	asideTxt.classList.remove("hidden")
})
// --Boton tema oscuro/claro
btnTheme.addEventListener("click", () => {
	body.classList.toggle("dark")
	body.classList.toggle("light")
	if (body.className == "dark") {
		textTheme.innerText = "Modo claro"
	} else {
		textTheme.innerText = "Modo oscuro"
	}
})

//--Cerrar Aside
closeAside.addEventListener('click', () => {
	aside.classList.add('hidden')
})

// --Boton descarga
downloadBtn.addEventListener("click", () => {
	domtoimage.toBlob(contImage).then(function (blob) {
		window.saveAs(blob, "meme.png")
	})
})

if (window.screen.width <= '700') {
	aside.classList.add('hidden')
}


