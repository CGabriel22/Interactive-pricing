let toggle = document.querySelector('.toggle');
var toggleResponse = document.querySelector('.toggle').classList[1];

toggle.addEventListener('click', ()=>{
    if(toggle.classList.contains('start')) {
        toggle.classList.replace('start', 'end');
    } else if(toggle.classList.contains('end')) {
        toggle.classList.replace('end', 'start');
    }
    toggleResponse = document.querySelector('.toggle').classList[1];

    if(sliderBar.value < 13) {
        // 0%
        pageViews.innerHTML = data_price[0][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[0];
            money[1].innerHTML = data_price_discount[0];
        } else {
            money[0].innerHTML = data_price[0][1];
            money[1].innerHTML = data_price[0][1];
        }
        
    } else if(sliderBar.value >= 13 && sliderBar.value < 38) {
        //25%
        pageViews.innerHTML = data_price[25][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[25];
            money[1].innerHTML = data_price_discount[25];
        } else {
            money[0].innerHTML = data_price[25][1];
            money[1].innerHTML = data_price[25][1];
        }
        
    } else if(sliderBar.value >= 38 && sliderBar.value < 63) {
        //50%
        pageViews.innerHTML = data_price[50][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[50];
            money[1].innerHTML = data_price_discount[50];
        } else {
            money[0].innerHTML = data_price[50][1];
            money[1].innerHTML = data_price[50][1];
        }
        
    } else if(sliderBar.value >= 63 && sliderBar.value < 88) {
        //75%
        pageViews.innerHTML = data_price[75][0];
        if(toggleResponse == 'end') {
            money[0].innerHTML = data_price_discount[75];
            money[1].innerHTML = data_price_discount[75];
        } else {
            money[0].innerHTML = data_price[75][1];
            money[1].innerHTML = data_price[75][1];
        }
        
    } else if(sliderBar.value >= 88) {
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
});