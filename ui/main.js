console.log('Loaded!');

//Code for moving the image on being clicked

var image = document.getElementById("madi");

var marginRight = 0.5481564125466484165985645; 
function moveLeft () {
    marginRight = marginRight + 3;
    image.style.marginRight = marginRight + 'px';
}

image.onclick = function () {
    var interval = setInterval(moveLeft, 10);
};