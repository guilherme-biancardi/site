const bar = $('.bar'), size = 400, initialSize = innerWidth, minSize = 505

let x = undefined, after = undefined, menuHide = false

function main() {
    if (innerWidth < 696) {
        bar.css('width', '100%')
    } else {
        bar.width(`${size}px`)
    }
    if (!menuHide) {
        x = (bar.width()) - 60
    }else{
        x = (bar.width()) + 10 
    }
    after = x * -1
    bar.css('left', `${-x}px`)
    if (innerHeight < 505) {
        bar.css('position', 'absolute')
        $('.btn-menu').css('position', 'absolute')
        bar.height('100vmax')
    }else{
        bar.css('position', 'fixed')
        $('.btn-menu').css('position', 'fixed')
        bar.height('100vh')
    }
}

window.onresize = function(){
    this.main()
}

$('.btn-menu').click(function () {
    let res = after + x
    bar.css('left', `${res}px`)
    after = res
    x *= -1
})

$('.btn-hide').click(function () {
    if (!menuHide) {
        x = bar.width() + 10
        $('.btn-hide').html('Fixar menu <i class="fas fa-thumbtack hide-fix"></i>')
        $('.content').css('padding-left', '0px')
        $('.header').css('position', 'fixed')
        menuHide = true
    }else{
        x = bar.width() - 60
        $('.btn-hide').html('Ocultar menu <i class="fas fa-angle-left"></i>')
        $('.content').css('padding-left', '60px')
        $('.header').css('position', 'relative')
        menuHide = false
    }
    after = x * -1
    bar.css('left', `${-x}px`)
})
