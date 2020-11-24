(function() {
    const wheel = document.querySelector('.wheel')
    const startbutton = document.querySelector('.button')
    let deg = 0

    startbutton.addEventListener('click', () => {
        startbutton.style.pointerEvents = 'none'
        deg = Math.floor(5000 + Math.random() * 5000)
        wheel.style.transition = 'all 10s ease-out'
        wheel.style.transform = `rotate(${deg}deg)`
    })

    wheel.addEventListener('transitionend', () => {

    })
})()