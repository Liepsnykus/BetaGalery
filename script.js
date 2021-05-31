const mainContainer = document.getElementById('mainContainer')

let images = [
    {
        images: 5,
        currentFrame: 1,
        name: 'Raimundas',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Monika',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Donatas',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Rūta',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Agnė',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Lukas',
        continue: false,
    },
    {
        images: 4,
        currentFrame: 1,
        name: 'Julija',
        continue: false,
    },
    {
        images: 3,
        currentFrame: 1,
        name: 'Eglė',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Paulius',
        continue: false,
    },
    {
        images: 7,
        currentFrame: 1,
        name: 'Justė',
        continue: false,
    },
    {
        images: 3,
        currentFrame: 1,
        name: 'Nepažystu',
        continue: false,
    },
    {
        images: 6,
        currentFrame: 1,
        name: 'Airida',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Ugnė',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Marius',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Paulina',
        continue: false,
    },
    {
        images: 5,
        currentFrame: 1,
        name: 'Filomena',
        continue: false,
    },
    {
        images: 3,
        currentFrame: 1,
        name: 'Žyginta',
        continue: false,
    }
]


images.forEach((object, index) => {
    let imageContainer = document.createElement('div')
    imageContainer.classList.add('imageContainer')
    imageContainer.classList.add('col-12')
    imageContainer.classList.add('col-sm-6')
    imageContainer.classList.add('col-md-4')
    imageContainer.classList.add('col-lg-3')
    imageContainer.classList.add('position-relative')
    imageContainer.innerHTML = `<div class="wrapper">
        <img class="image" src="./images/${index}.jpg" id="${index}" alt="">
        <div class="nameWrap"><div class="name">${object.name}</div></div>
        <div class="over"></div>
        </div>`
    mainContainer.appendChild(imageContainer)
    imageContainer.addEventListener('mouseover', function (event) { displayImages(event, object, index) })
    imageContainer.addEventListener('click', function (event) { displayImages(event, object, index) })
    imageContainer.addEventListener('mouseout', function (event) { displayShadow(event, object, index) })

})


function displayImages(event, object, index) {
    object.continue=true
    event.path[1].children[0].src = `images/${index}_${object.currentFrame}.jpg`

    setTimeout(() => {
        if (object.currentFrame < object.images) {
            object.currentFrame++
            if (object.continue) {
                object.continue = false
                displayImages(event, object, index)
            }
        } else {
            object.currentFrame = 1
            if (object.continue) {
                object.continue = false
                displayImages(event, object, index)
            }
        }
    }, 800);


}
function displayShadow(event, object, index) {
    object.continue = false
    object.currentFrame = 1
    event.path[1].children[0].src = `images/${index}.jpg`
}


