let counter = document.querySelector('#counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');


let count = 0; 

addCount.addEventListener('click', incrementCount);
lowerCount.addEventListener('click', decrementCount);

function incrementCount(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = 'green';
    } else if(counter.innerHTML === '0'){
        counter.style.color = '#333'
    }
    
    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}],{duration:1000, fill:'forwards'});

}

function decrementCount(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML< '0'){
        counter.style.color = 'red';
    } else if(counter.innerHTML === '0'){
        counter.style.color = '#333'
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});

}