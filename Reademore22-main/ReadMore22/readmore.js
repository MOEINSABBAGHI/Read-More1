
function animaited(button) {
    const x = document.getElementById('text');
    if (x.style.maxHeight = '130px') {
        x.style.transition = ' 2s 1s';
        x.style.maxHeight = '300px';
        button.textContent = 'Read less';
    }
    else {
    x.style.transition = ' 2s 1s';
    x.style.maxHeight = '130px';
    button.textContent = 'Read more';
}
}


