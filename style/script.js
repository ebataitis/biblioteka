///visos "fadeEffect" klases atskrolinus iki ju vidurio atsiranda 


var fadeEffect = document.querySelectorAll('.fadeEffect');


window.addEventListener('scroll', function () {
    for (let i = 0; i < fadeEffect.length; i++) {
        let fadeEffectposition = fadeEffect[i].offsetTop;
        if (window.scrollY > fadeEffectposition-(window.innerHeight-fadeEffect[i].clientHeight/2)) {
            fadeEffect[i].style.opacity = 1;
        }
    }


})
