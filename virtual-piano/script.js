/**РАБОЧИЕ СОБЫТИЯ ДЛЯ МЫШИ И КЛАВИАТУРЫ (БЕЗ КРОСОВЕР С ЗАЖАТОЙ МЫШЬЮ) */
window.addEventListener('keydown', function(e) {
    playSound(e.code);

});

function playSound(keyId) {
    const audio = document.querySelector(`audio[data-code="${keyId}"]`);
    const key = document.querySelector(`.piano-key[data-code="${keyId}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active', 'piano-key-active-pseudo');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('piano-key-active', 'piano-key-active-pseudo');

}

const piano = document.querySelectorAll('.piano-key');
piano.forEach(key => key.addEventListener('transitionend', removeTransition));

const keyDivs = document.getElementsByClassName("piano-key");

const playSoundFromClick = function(e) {
    const keyId = this.getAttribute("data-code");
    playSound(keyId);
};

for (let i = 0; i < keyDivs.length; i++) {
    keyDivs[i].addEventListener('mousedown', playSoundFromClick);
}

/**ПЕРЕКЛЮЧЕНИЕ БУКВ И НОТ*/

function switchCode() {
    if (!event.target.classList.contains('btn-active')) {
        document.querySelectorAll('.btn').forEach(e => e.classList.toggle("btn-active"))
        piano.forEach(e => e.classList.toggle("piano-key-letter"))
    }
}
document.querySelectorAll(".btn-container").forEach(btn => btn.addEventListener("click", function() {
    switchCode(this);
}));

/**ПОЛНОЭКРАННЫЙ РЕЖИМ*/
function makeFullscreen() {
    let elem = document.documentElement;
    elem.requestFullscreen =
        elem.requestFullscreen ||
        elem.mozRequestFullscreen ||
        elem.msRequestFullscreen ||
        elem.webkitRequestFullscreen;

    if (!document.fullscreenElement) {
        elem.requestFullscreen()

    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}