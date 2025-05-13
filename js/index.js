(function() {
    document.addEventListener('DOMContentLoaded', function(e) {
        const overlay = document.querySelector('.loading-overlay')
        
        overlay.style.opacity = 0
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 1000)

        const slogan = document.querySelector('header.header .slogan')
        slogan.classList.remove('start')

        setTimeout(() => {
            if (window.location.hash) {
                const target = document.querySelector(`a[name='${window.location.hash.replace('#','')}']`)
                if (target) {
                    target.scrollIntoView({behavior: 'smooth'})
                }
            }
        }, 100)
    })
})()