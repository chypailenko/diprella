var nav = document.getElementById('main-nav');

function changeStyle(ev) {
    nav.style.display = ev.target.checked ? 'flex' : 'none';
}