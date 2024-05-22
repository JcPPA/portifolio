//Som dos botões das redes sociais
function playSound() {
    var audio = new Audio('./music/breakbox.MP3');
    audio.play();
};

//personsagens em movimento usando GIFs
function moveImage() {
    const image = document.getElementById('bowser');
    let position = 0;
    const interval = 10;
    const speed = 1;

    function moveRight() {
        position += speed;
        if (position > window.innerWidth) {
            position = -image.innerWidth;
        }
        image.style.right = position + 'px';
    }

    setInterval(moveRight, interval);
}

document.addEventListener('DOMContentLoaded', moveImage);

function moveImages() {
    const images = document.getElementById('koopa');
    const imageA = document.getElementById('koopaA');
    const imageB = document.getElementById('koopaB');


    let position = 5;
    const interval = 10;
    const speed = 1;
    function moveLeft() {
        position += speed;
        if (position > window.innerHeight) {
            position = -images.innerHeight;
            position = -imageA.innerHeight;
            position = -imageB.innerHeight;
        }
        images.style.left = position + 'px';
        imageA.style.left = position + 'px';
        imageB.style.left = position + 'px';
    }

    setInterval(moveLeft, interval);
}
document.addEventListener('DOMContentLoaded', moveImages);