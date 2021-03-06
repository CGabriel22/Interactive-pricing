let sliderBar = document.querySelector('.slider');
let progressBar = document.styleSheets[1].cssRules[30];
let pageViews = document.querySelector('#pageViews');
let money = document.querySelectorAll('.price .h5');
const data_price = {
    0: ['10k visualizações de página', '$ 8.00'],
    25: ['50k visualizações de página', '$ 12.00'],
    50: ['100k visualizações de página', '$ 16.00'],
    75: ['500k visualizações de página', '$ 24.00'],
    100: ['1M visualizações de página', '$ 36.00']
}
const data_price_discount = {
    0: '$ 6.00',
    25: '$ 9.00',
    50: '$ 12.00',
    75: '$ 18.00',
    100: '$ 27.00'
}

sliderBar.oninput = function () {
    // console.log(this.value);
    progressBar.style.width = `${this.value}%`;

    if(this.value < 13) {
        // 0%
        pageViews.innerHTML = data_price[0][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[0];
            money[1].innerHTML = data_price_discount[0];
        } else {
            money[0].innerHTML = data_price[0][1];
            money[1].innerHTML = data_price[0][1];
        }
        
    } else if(this.value >= 13 && this.value < 38) {
        //25%
        pageViews.innerHTML = data_price[25][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[25];
            money[1].innerHTML = data_price_discount[25];
        } else {
            money[0].innerHTML = data_price[25][1];
            money[1].innerHTML = data_price[25][1];
        }
        
    } else if(this.value >= 38 && this.value < 63) {
        //50%
        pageViews.innerHTML = data_price[50][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[50];
            money[1].innerHTML = data_price_discount[50];
        } else {
            money[0].innerHTML = data_price[50][1];
            money[1].innerHTML = data_price[50][1];
        }
        
    } else if(this.value >= 63 && this.value < 88) {
        //75%
        pageViews.innerHTML = data_price[75][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[75];
            money[1].innerHTML = data_price_discount[75];
        } else {
            money[0].innerHTML = data_price[75][1];
            money[1].innerHTML = data_price[75][1];
        }
        
    } else if(this.value >= 88) {
        //100%
        pageViews.innerHTML = data_price[100][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[100];
            money[1].innerHTML = data_price_discount[100];
        } else {
            money[0].innerHTML = data_price[100][1];
            money[1].innerHTML = data_price[100][1];
        }
        
    }
}


sliderBar.addEventListener('click', (e)=>{
    let barValue =  e.target.value;
    if(barValue < 13) {
        e.target.value = 0;
        progressBar.style.width = `0%`;
    } else if(barValue >= 13 && barValue < 38) {
        e.target.value = 25;
        progressBar.style.width = `25%`;
    } else if(barValue >= 38 && barValue < 63) {
        e.target.value = 50;
        progressBar.style.width = `50%`;
    } else if(barValue >= 63 && barValue < 88) {
        e.target.value = 75;
        progressBar.style.width = `75%`;
    } else if(barValue >= 88) {
        e.target.value = 100;
        progressBar.style.width = `100%`;
    }
})