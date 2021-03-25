let sliderBar = document.querySelector('.slider');
let progressBar = document.styleSheets[1].cssRules[30]

sliderBar.oninput = function() {
    console.log(this.value);
    progressBar.style.width = `${this.value}%`;
}