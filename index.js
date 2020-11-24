(function() {
    const wheel = document.querySelector('.wheel')
    const startButton = document.querySelector('.button')
    let deg = 0

    startButton.addEventListener('click', () => {
        // Disable button during spin
        startButton.style.pointerEvents = 'none'
        // Calculate a new rotation between 3000 and 6000
        deg = Math.floor(3000 + Math.random() * 3000)
        // Set the transition on the wheel
        wheel.style.transition = 'all 8s ease-out'
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`
        // the blur effect to make it look like blurry
        wheel.classList.add('blur')
    })

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur')
        // Enable back the button when spin is over
        startButton.style.pointerEvents = 'auto'
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none'
        // At this point our degree is obviouly more than 360 as set in line 10. So we need to reset it to a number
        // that is within 360 to have a natural spin.
        const actualDeg = deg %  360
        // Start the next spin from a value less then 360
        wheel.style.transform = `rotate(${actualDeg}deg)`
    })
})()