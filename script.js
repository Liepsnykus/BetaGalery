const mainContainer = document.getElementById('mainContainer')

let names = ['Raimundas', 'Monika', 'Donatas', ' Rūta', 'Agnė', 'Lukas', 'Justė', 'Airida', 'Ugnė', 'Marius', 'Paulina', 'Filomena', 'Angelina', 'Žyginta', 'Julija', 'Rolandas', 'Ugnius', 'Jurga', 'Eglė']


names.forEach((name, index) => {
    let imageContainer = document.createElement('div')
    imageContainer.classList.add('imageContainer')
    imageContainer.classList.add('col-12')
    imageContainer.classList.add('col-sm-6')
    imageContainer.classList.add('col-md-4')
    imageContainer.classList.add('col-lg-3')
    // imageContainer.classList.add('position-relative')
    imageContainer.innerHTML = `<div class="wrapper">
        <img class="image" src="./images/bg/${index}.jpg" id="${index}" alt="">
        <img class="image-hover" src="./images/${index}.gif" id="${index}" alt="">
        <div class="nameWrap"><div class="name">${name}</div></div>
        </div>`
    mainContainer.appendChild(imageContainer)
    imageContainer.addEventListener('click', displayImages)
})


function displayImages(event) {
    event.target.classList.add('opacity')
}



