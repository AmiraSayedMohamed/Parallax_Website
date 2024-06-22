document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('nav .container').appendChild(burger);

    burger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

