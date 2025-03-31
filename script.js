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
    contentRef.innerHTML += `
        <div onclick="toggleOverlay()">
            <img src="${img[i]}" alt="Bild ${i + 1}">
        </div>`;
  }
}

function toggleOverlay() {
  let overlayRef = document.getElementById("imgoverlay");

  overlayRef.classList.toggle("d_none");
}
