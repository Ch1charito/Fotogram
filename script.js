let imgPlaces = [
    "alaska.jpg",
    "borabora.jpg",
    "camp.jpg",
    "munich.jpg",
    "nyc.jpg",
    "rio.jpg",
    "taj.jpg",
    "uae.jpg",
]

let img = [
    "./img/bilder/image1.jpg",
    "./img/bilder/image2.jpg",
    "./img/bilder/image3.jpg",
    "./img/bilder/image4.jpg",
]





function render() {
    let contentRef = document.getElementById('content');
    for (let i = 0; i < img.length; i++){
        contentRef.innerHTML += `
        <div>
            <img src="${img} alt="Bild ${i + 1}">
        </div>`
    }
};


