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
  let contentRef = document.getElementById("content");  // um die Elemente im Array auf der Seite durch eine Schleife zu rendern
  for (let i = 0; i < img.length; i++) {
    contentRef.innerHTML += singlePictures(i);
  }
}

function singlePictures(i) {          // um den Inhalt den man in die Schleife setzt zu bestimmen
    return `<div onclick="toggleOverlay(${i})">
                <img src="${img[i]}" alt="Bild ${i + 1}">
            </div>`;
    
}

function toggleOverlay(index) {     // um das Overlay zu togglen
  let overlayRef = document.getElementById("imgoverlay");
  renderOverlay(index);
  overlayRef.classList.toggle("d_none");
  
}

function renderOverlay(index) {  // um den Inhalt des Overlays zu bestimmen
  let overlayRef = document.getElementById("imgoverlay");
  overlayRef.innerHTML = "";  // den Container leeren bevor die function ausgeführt wird
  overlayRef.innerHTML += `<button class="close-btn" onclick="toggleOverlay(${index})">X</button>
                            <div class="cardview">
                              <button onclick="moveLeft(${index})" class="switch-btn"><</button>
                              <img id ="bigpic" src="${img[index]}">
                              <button onclick="moveRight(${index})" class="switch-btn">></button>
                            </div>`;
  
}

function moveRight(i) {
  if (i >= img.length - 1) { // Wenn i gleich oder größer als das letzte Element ist
    i = 0; // setzt i auf das erste Element zurück
  } else {
    i = i + 1; // geht zum nächsten Element
  }
  renderOverlay(i);
    
  
}

function moveLeft(i) {
  if (i === 0) { // Wenn i gleich 0 ist
    renderOverlay(img.length - 1); // setzt i auf das letzte Element zurück
    
  } else {
    renderOverlay(i-1); // geht zum voherigen Element
  }
  

}
