let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', ()=>{
    if(toggle.classList.contains('start')) {
        toggle.classList.replace('start', 'end');
    } else if(toggle.classList.contains('end')) {
        toggle.classList.replace('end', 'start');
    }
});