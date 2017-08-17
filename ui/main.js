console.log('Loaded!');

//Code for moving the image on being clicked

var image = document.getElementById("madi");

var marginLeft = 0; 
function moveRight () {
    marginLeft = marginLeft + 3;
    image.style.marginLeft = marginLeft + 'px';
}

image.onclick = function () {
    var interval = setInterval(moveRight, 10);
};