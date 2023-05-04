const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let today = `Today's Date: ${day}-${month}-${year}`;

let showDate = document.querySelector('#date');

showDate.innerText = today;

console.log(showDate)