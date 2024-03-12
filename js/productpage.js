
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



//product image thumbnails display upon hover and click
let thumbs = document.getElementsByClassName('thumbs');
let activethumb = document.getElementsByClassName('active');
for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('mouseover', function () {
        console.log(activethumb);
        if (activethumb.length > 0) {
            activethumb[0].classList.remove('active');
        }
        this.classList.add('active');
        document.getElementById('imghighlight').src = this.src;
    })
}


document.getElementById('productzoomcontainer').addEventListener('mouseover', function () {
    imageMagnify('imghighlight');
})

//product image zoom 
function imageMagnify(imageID) {

    //product image zoom variables: image is product highlight image, zoom is zooming lens
    let image = document.getElementById(imageID);
    let zoomMagnify = document.getElementById('magnify')

    //product image zoom: replace image in zoom lens with product highlight image
    zoomMagnify.style.backgroundImage = `url(${image.src})`

    //product image zoom amount/ratio
    let zoom = 2;

    //product image zoom lens backgroundsize calculation
    zoomMagnify.style.backgroundSize = (image.width * zoom) + 'px ' + (image.height * zoom) + 'px';

    //event listener to cursor movement and trigger function
    image.addEventListener("mousemove", zoomMovement)
    zoomMagnify.addEventListener("mousemove", zoomMovement)
    image.addEventListener("touchmove", zoomMovement)


    //print to view x and y positions
    function zoomMovement(e) {
        //calculation of page x and y coordinates minus image x and y coordinates to start cursor origin 0,0 at image
        let cursorEventX = e.clientX;
        let cursorEventY = e.clientY;
        let movingBounds = image.getBoundingClientRect();
        let x = cursorEventX - movingBounds.left;
        let y = cursorEventY - movingBounds.top;
        let cursorPosition = { 'x': x, 'y': y };

        //set x and y position based on cursor movement
        let leftposition = cursorPosition.x + (zoomMagnify.offsetWidth / 1.3);
        let topposition = cursorPosition.y + (zoomMagnify.offsetHeight / 1.3);
        //set zoom lens movement boundaries
        if (leftposition < movingBounds.left - (zoomMagnify.offsetWidth / 4)) {
            zoomMagnify.style.opacity = '0';
            leftposition = image.left;
        }
        if (leftposition < movingBounds.right) {
            zoomMagnify.style.opacity = '1';
        }
        if (leftposition > movingBounds.right - (zoomMagnify.offsetWidth * 0.7)) {
            zoomMagnify.style.opacity = '0';
            leftposition = movingBounds.right - (zoomMagnify.offsetWidth * 0.7);
        }

        if (topposition < movingBounds.top - (zoomMagnify.offsetHeight / 4)) {
            zoomMagnify.style.opacity = '0';
            topposition = movingBounds.top;
        }
        if (topposition > movingBounds.bottom + (zoomMagnify.offsetHeight / 1.5)) {
            zoomMagnify.style.opacity = '0';
            topposition = movingBounds.bottom;
        }
        //set x and y position of zoom lens
        zoomMagnify.style.left = leftposition + 'px';
        zoomMagnify.style.top = topposition + 'px';
        //set lens background position and invert
        zoomMagnify.style.backgroundPosition = '-' + (cursorPosition.x * zoom) + 'px -' + (cursorPosition.y * zoom) + 'px'

    }
}



//product page's input stepper 
const itemQuantity = document.getElementById("quantity");
function inputstep(btn) {
    //value calculation variable
    let id = btn.getAttribute("id");
    let min = itemQuantity.getAttribute("min");
    let max = itemQuantity.getAttribute("max");
    let step = itemQuantity.getAttribute("step");
    let value = itemQuantity.getAttribute("value");
    let calcStep = (id == "plus") ? (step * 1) : (step * -1);
    let newValue = parseInt(value) + calcStep;

    //setting newValue to value
    if (newValue >= min && newValue <= max) {
        itemQuantity.setAttribute("value", newValue);
    }
}




// 'you might like this' carousel left and right buttons and image slider
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
    var mq5 = window.matchMedia("(min-width: 2048px)");
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