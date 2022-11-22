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
    } 
    else if (age > 65){
        price = price * 0.667;
        console.log(price.toFixed(2));
    } else {
        console.log(price.toFixed(2));
    }

    document.querySelector('p.price').innerHTML = `in base ai dati da te forniti il costo del biglietto è di: ${price.toFixed(2)} &euro;`;

});