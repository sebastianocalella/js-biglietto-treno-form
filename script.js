const button = document.getElementById('confirm');

button.addEventListener('click', function(){
    let distance = parseFloat(document.getElementById('distance').value);
    console.log(distance);
    let age = parseInt(document.getElementById('age').value);
    console.log(age);
    let price = distance * 0.2762;

    if (age < 18){
        price = price * 0.825;
        console.log(price.toFixed(2));
        document.querySelector('p.pre').innerHTML = '<em>sei minorenne? </em>hai diritto ad uno sconto del 17,5%!';
        document.querySelector('p.after').innerHTML = `hai risparmiato ben:  ${(price.toFixed(2)/0.825*0.175).toFixed(2)} &euro;`;
        console.log(document.getElementById('answer').insertAdjacentHTML);
    } 
    else if (age > 65){
        price = price * 0.667;
        console.log(price.toFixed(2));
        document.querySelector('p.pre').innerHTML = '<em>hai più di 65 anni? </em>hai diritto ad uno sconto del 33.3%!';
        document.querySelector('p.after').innerHTML = `hai risparmiato ben:  ${(price.toFixed(2)/0.667*0.333).toFixed(2)} &euro;`;
    } else {
        console.log(price.toFixed(2));
        document.querySelector('p.pre').innerHTML = '';
        document.querySelector('p.after').innerHTML = '';
    }
    
    document.getElementById('answer').innerHTML = `in base ai dati da te forniti il costo del biglietto è di: ${price.toFixed(2)} &euro;`;

});