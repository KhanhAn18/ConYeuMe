

function showMessage() {
    const loveMessage = document.querySelector('.love-message');
    loveMessage.classList.remove('hidden');
    loveMessage.style.opacity = '1';
    loveMessage.style.transform = 'translateY(0)';
}

function showHeart() {
    const heart = document.querySelector('.heart');
    heart.classList.remove('hidden');
    document.querySelector('.yes-button').disabled = true;
    document.querySelector('.no-button').disabled = true;
}
const messages = [
    "Con biết mẹ thương con mà 💁 đừng giấu con nhé 😇!"
];

function askAgain() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

