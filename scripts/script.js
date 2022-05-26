const tL = gsap.timeline( {
    defaults: {
        duration: 1
    }
})

from_01 = {
    opacity: 0,
    scale: 0,
    rotation: 720 * 1.5
}

to_01 = {
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: 'elastic.out(1, 0.4)'
    // ease: 'back.out(1.2)'
}

tL
    .from('.grid-1', {
        y: '-500',
        ease: 'elastic.out(1, 0.3)'
    })
    .from('.grid-2', {
        opacity: 0,
        stagger: 0.5
    })
    .from('.grid-3', {
        x: '-100vw',
        ease: 'power2.in'
    }, 1)
    .from('.grid-4', {
        x: '500%',
        ease: 'bounce'
    }, '<0.6')
    .from('.grid-5', {
        y: 500,
        ease: 'elastic'
    })
    .fromTo('.warning',
        from_01,
        to_01)
    .to('svg', {
        x: '90vw',
        ease: 'bounce'
    })

const clickCirc = document.querySelector('svg')
clickCirc.addEventListener('click', () => {
    tL.timeScale(2)
    tL.reverse()
})