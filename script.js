let img = [
  "./img/bilder/image1.jpg",
  "./img/bilder/image2.jpg",
  "./img/bilder/image3.jpg",
  "./img/bilder/image4.jpg",
  "./img/bilder/image5.jpg",
  "./img/bilder/image6.jpg",
  "./img/bilder/image7.jpg",
  "./img/bilder/image8.jpg",
  "./img/bilder/image9.jpg",
  "./img/bilder/image10.jpg",
  "./img/bilder/image11.jpg",
  "./img/bilder/image12.jpg",
];



function render() {
  let contentRef = document.getElementById("content");
  for (let i = 0; i < img.length; i++) {
    contentRef.innerHTML += singlePictures(i);
  }
}

function singlePictures(i) {
    return `<div onclick="toggleOverlay(${i})">
                <img src="${img[i]}" alt="Bild ${i + 1}">
            </div>`;
    
}

function toggleOverlay(index) {
  let overlayRef = document.getElementById("imgoverlay");
  overlayRef.innerHTML = "";
  overlayRef.innerHTML += `<button class="close-btn" onclick="toggleOverlay(${index})">X</button>
                            <div class="cardview">
                              <button onclick="moveLeft()" class="switch-btn"><</button>
                              <img id="overlaypic" src="${img[index]}">
                              <button onclick="moveRight()" class="switch-btn">></button>
                            </div>`;
  overlayRef.classList.toggle("d_none");
  
}

function moveRight(index) {
  let moveRightRef = document.getElementById("overlaypic");
  moveRightRef.innerHTML += `<button class="close-btn" onclick="toggleOverlay(${index + 1})">X</button>
                              <div class="cardview">
                                <button onclick="moveLeft()" class="switch-btn"><</button>
                                <img id=overlaypic src="${img[index]}">
                                <button onclick="moveRight()" class="switch-btn">></button>
                              </div>`

}

function moveLeft() {

}
