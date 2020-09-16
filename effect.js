var toggle = document.querySelector('.recipe--block--dark--toggle');
var isInstrDark = false;

toggle.addEventListener('click', (e) => {
    if(!isInstrDark){
       e.currentTarget.parentElement.parentElement.className = 'recipe--block recipe--block--dark';
       e.currentTarget.innerText = 'brightness_7';
       isInstrDark = true;
    }else{
        e.currentTarget.parentElement.parentElement.className = 'recipe--block';
        e.currentTarget.innerText = 'brightness_4';
        isInstrDark = false;
    }
}, false);