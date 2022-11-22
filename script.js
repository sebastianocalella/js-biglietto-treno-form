const button = document.querySelector('button#confirm');

button.addEventListener('click', function(){
    let distance = parseFloat(document.getElementById('distance').value);
    console.log(distance);
    let age = parseInt(document.getElementById('age').value);
    console.log(age);
    let price = distance * 0.2762;
    console.log(price);
});