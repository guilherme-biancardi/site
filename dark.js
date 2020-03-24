const nightMode = localStorage.getItem('Mode'), html = document.documentElement

if (nightMode) {

    html.classList.add('dark-mode')
}

$('.btn-dark').click(function () {

    html.classList.toggle('dark-mode')

    if (html.classList.contains('dark-mode')) {

        return localStorage.setItem('Mode', true)

    } else {

        localStorage.removeItem('Mode')

    }
})