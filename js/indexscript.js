
// product thumbnail bookmark interactivity: before
function bookmarkbefore(x) {
    x.src = "images/icons_bookmark_hover-01.svg";
}

// product thumbnail bookmark interactivity function: after
function bookmarkafter(x) {
    x.src = "images/icons_bookmark.svg";
}

// product thumbnail bookmark interactivity function: clicked
function bookmarkclicked(x) {
    x.src = "images/icons_bookmark_clicked-01.svg";
}

// product carousel left and right buttons and image slider
const productGroupContainer = [...document.querySelectorAll('.productgroup')];
const rollright = [...document.querySelectorAll('.rightbtn')];
const rollleft = [...document.querySelectorAll('.leftbtn')];

productGroupContainer.forEach((item, i) => {
    let scrollwidth = item.getBoundingClientRect();
    let imagewidth = scrollwidth.width;
    var mq1 = window.matchMedia("(max-width: 300px)");
    var mq2 = window.matchMedia("(max-width: 540px)");
    var mq3 = window.matchMedia("(max-width: 720px)");
    var mq4 = window.matchMedia("(max-width: 1080px)");
    var mq5 = window.matchMedia("(max-width: 2048px)");
    if (mq1.matches) {
        rollright[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.8;
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.8;
            item.scrollLeft -= imagewidth;
        })
    }
    else if (mq2.matches) {
        rollright[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.6;
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.6;
            item.scrollLeft -= imagewidth;
        })
    }
    else if (mq3.matches) {
        rollright[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.7;
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.7;
            item.scrollLeft -= imagewidth;
        })
    }
    else if (mq4.matches) {
        rollright[i].addEventListener('click', () => {
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            item.scrollLeft -= imagewidth;
        })
    }
    else {
        rollright[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.5;
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.5;
            item.scrollLeft -= imagewidth;
        })
    }


})