/*New Date

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let today = `${day}-${month}-${year}`;

let showDate = document.querySelector('#date');

showDate.innerText = today;

console.log(showDate) */

// Variables

let wcOpen = document.getElementById('world-cup');
let wcInfo = document.getElementById('wc-container');
let wcClose = document.getElementById('close-wc');

// Event Listeners

wcOpen.addEventListener('click', function() {

    wcInfo.style.display = 'block';
});

wcClose.addEventListener('click', function() {

    wcInfo.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(e.target == wcInfo) {
        wcInfo.style.display = 'none';
    }
});