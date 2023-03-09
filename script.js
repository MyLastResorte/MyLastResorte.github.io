

let hideTextbtn = document.getElementById('hideTextbtn');

let hideText = document.getElementById('hideText');

hideTextbtn.addEventListener('click',toggleText);
function toggleText(){
    hideText.classList.toggle('showText');
}
