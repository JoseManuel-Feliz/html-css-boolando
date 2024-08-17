console.log('ok')

/* Toogle fuction for favourites class  */

document.addEventListener('DOMContentLoaded', function () {
    const heart = document.querySelectorAll('.favourites');

    heart.forEach(d => {
        d.addEventListener('mouseover', function () {
            d.classList.add('c-red');
        });
        d.addEventListener('mouseout', function () {
            d.classList.remove('c-red');
        });
    });

})