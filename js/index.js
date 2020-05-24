const imagesPath = "./images";
console.log("images are added for indexjs file")
const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
const totalImages = images.length;

const imageElements = [];
let activeElement = null
function createImage(name,index){
    console.log("name" , name)
    var img = document.createElement("img");
    img.src = `${imagesPath}/${name}`;
    if(index === 0){
        img.classList.add('active')
        activeElement = index;
    }
    if(index === images.length-1){
        img.classList.add('prev')
    }
    imageElements.push(img)
    var src = document.getElementById("carousel-container");
    src.appendChild(img);
}

images.forEach((image,index) => {
    createImage(image,index)
})

const nextActive = () => {
    if(activeElement === 0){
        imageElements[imageElements.length - 1].classList.remove('prev')
    }else {
        imageElements[activeElement-1].classList.remove('prev')
    }

    imageElements[activeElement].classList.add('prev');
    imageElements[activeElement].classList.remove('active')
    if(activeElement === imageElements.length - 1){
        imageElements[0].classList.add('active')
        activeElement = 0;
    }else {
        imageElements[activeElement+1].classList.add('active');
        activeElement++;
    }
}

const prevActive = () => {
    imageElements[activeElement].classList.remove('active');
    if(activeElement === 0){
        imageElements[totalImages - 1].classList.remove('prev');
        imageElements[totalImages - 1].classList.add('active');
        imageElements[totalImages - 2].classList.add('prev');
        activeElement = totalImages - 1;
    }else if(activeElement === 1) {
        imageElements[activeElement - 1].classList.remove('prev');
        imageElements[activeElement - 1].classList.add('active');
        imageElements[totalImages - 1].classList.add('prev');
        activeElement = activeElement - 1;
    }else {
        imageElements[activeElement-1].classList.remove('prev');
        imageElements[activeElement-1].classList.add('active');
        imageElements[activeElement-2].classList.add('prev');
        activeElement = activeElement - 1;
    }
}

// setInterval( () => {
//     prevActive()
// },2000)