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
    const speed = 5;

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