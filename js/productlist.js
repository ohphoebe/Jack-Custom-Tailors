//product display array with object properties
const productList = [
    {
        productName: 'Classic Mandarin Suit',
        id: document.querySelector('firstproduct'),
        url: 'images/product/product01-01.jpg',
        gender: 'male',
        style: 'casual',
        size: ['s', 'm', 'xxl'],
        colour: 'black',
        fabric: ['marzoni', 'dormeuil'],
        price: 372
    },

    {
        productName: 'Standard Mandarin Suit',
        id: document.querySelector('secondproduct'),
        url: 'images/product/product02-01.jpg',
        gender: 'male',
        style: 'casual',
        size: ['m', 'xl', 'xxl'],
        colour: 'gray',
        fabric: ['piacenza', 'dormeuil'],
        price: 513
    },

    {
        productName: 'Short Diamond Suit',
        id: document.querySelector('thirdproduct'),
        url: 'images/product/product03-01.jpg',
        gender: 'male',
        style: 'formal',
        size: ['s', 'm', 'xxl'],
        colour: 'lightbrown',
        fabric: ['marzoni', 'dormeuil'],
        price: 1034.10
    },

    {
        productName: 'Mandarin Diamond Suit',
        id: document.querySelector('fourthproduct'),
        url: 'images/product/product04-01.jpg',
        gender: 'male',
        style: 'formal',
        size: ['xs', 'l', 'xl'],
        colour: 'gray',
        fabric: ['piacenza', 'dormeuil'],
        price: 1047.20
    },


    {
        productName: 'Oriental Spread Suit',
        id: document.querySelector('fifthproduct'),
        url: 'images/product/product05-01.jpg',
        gender: 'male',
        style: 'creative',
        size: ['s', 'm', 'xxl'],
        colour: 'green',
        fabric: ['marzoni', 'dormeuil'],
        price: 1250.10
    },

    {
        productName: 'Polynesian Spread Suit',
        id: document.querySelector('sixthproduct'),
        url: 'images/product/product06-01.jpg',
        gender: 'male',
        style: 'creative',
        size: ['s', 'm', 'xxl'],
        colour: 'red',
        fabric: ['marzoni', 'dormeuil'],
        price: 1271.20
    },
    {
        productName: 'High Mandarin Suit',
        url: 'images/product/product07-01.jpg',
        gender: 'male',
        style: 'casual',
        size: ['s', 'm', 'xxl'],
        colour: 'blue',
        fabric: ['marzoni', 'dormeuil'],
        price: 372
    },

    {
        productName: 'Square Mandarin Suit',
        url: 'images/product/product08-01.jpg',
        gender: 'male',
        style: 'casual',
        size: ['m', 'xl', 'xxl'],
        colour: 'darkbrown',
        fabric: ['piacenza', 'dormeuil'],
        price: 740.05
    },

    {
        productName: 'Straight Round Suit',
        url: 'images/product/product09-01.jpg',
        gender: 'male',
        style: 'casual',
        size: ['s', 'm', 'xxl'],
        colour: 'black',
        fabric: ['marzoni', 'dormeuil'],
        price: 432
    },

    {
        productName: 'French Spread Suit',
        url: 'images/product/product10-01.jpg',
        gender: 'male',
        style: 'formal',
        size: ['xs', 'l', 'xl'],
        colour: 'red',
        fabric: ['piacenza', 'dormeuil'],
        price: 1471.55
    },


    {
        productName: 'Northern Spread Suit',
        url: 'images/product/product11-01.jpg',
        gender: 'male',
        style: 'creative',
        size: ['s', 'm', 'xxl'],
        colour: 'purple',
        fabric: ['marzoni', 'dormeuil'],
        price: 1250.10
    },

    {
        productName: 'Roman Spread Suit',
        url: 'images/product/product12-01.jpg',
        gender: 'male',
        style: 'creative',
        size: ['s', 'm', 'xxl'],
        colour: 'blue',
        fabric: ['marzoni', 'dormeuil'],
        price: 1271.20
    }
]

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

//once checkbox is clicked, the button will look different and will auto-filter products based on data-filter attribute
function selection(x) {
    x.classList.toggle('clicked');

    let datainfo = x.getAttribute('data-filter');
    let one = document.querySelector('#firstproduct');
    let two = document.querySelector('#secondproduct');
    let three = document.querySelector('#thirdproduct');
    let four = document.querySelector('#fourthproduct');
    let five = document.querySelector('#fifthproduct');
    let six = document.querySelector('#sixthproduct');
    let seven = document.querySelector('#seventhproduct');
    let eight = document.querySelector('#eighthproduct');
    let nine = document.querySelector('#ninethproduct');
    let ten = document.querySelector('#tenthproduct');
    let eleven = document.querySelector('#eleventhproduct');
    let twelve = document.querySelector('#twelvethproduct');
    
    if (datainfo == 'black') {
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        ten.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }
    
    if (datainfo == 'gray') {
        one.classList.toggle('hide');
        three.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        ten.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'blue') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        ten.classList.toggle('hide');
        eleven.classList.toggle('hide');
    }

    if (datainfo == 'lightbrown') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        ten.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'darkbrown') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        nine.classList.toggle('hide');
        ten.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'green') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        ten.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'purple') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        ten.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'red') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    
    if (datainfo == 'xs') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        four.classList.toggle('hide');
        five.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 's') {
        two.classList.toggle('hide');
        four.classList.toggle('hide');
        eight.classList.toggle('hide');
        ten.classList.toggle('hide');
    }

    if (datainfo == 'm') {
        four.classList.toggle('hide');
        ten.classList.toggle('hide');
    }

    if (datainfo == 'l') {
        one.classList.toggle('hide');
        two.classList.toggle('hide');
        three.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        eight.classList.toggle('hide');
        nine.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'xl') {
        one.classList.toggle('hide');
        three.classList.toggle('hide');
        five.classList.toggle('hide');
        six.classList.toggle('hide');
        seven.classList.toggle('hide');
        nine.classList.toggle('hide');
        eleven.classList.toggle('hide');
        twelve.classList.toggle('hide');
    }

    if (datainfo == 'xxl') {
        four.classList.toggle('hide');
        ten.classList.toggle('hide');
    }

    if (datainfo == 'ladies') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.add('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

    if (datainfo == 'gentlemen') {
        one.classList.remove('hide');
        two.classList.remove('hide');
        three.classList.remove('hide');
        four.classList.remove('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.remove('hide');
        eight.classList.remove('hide');
        nine.classList.remove('hide');
        ten.classList.remove('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'allgender') {
        one.classList.remove('hide');
        two.classList.remove('hide');
        three.classList.remove('hide');
        four.classList.remove('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.remove('hide');
        eight.classList.remove('hide');
        nine.classList.remove('hide');
        ten.classList.remove('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'allstyle') {
        one.classList.remove('hide');
        two.classList.remove('hide');
        three.classList.remove('hide');
        four.classList.remove('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.remove('hide');
        eight.classList.remove('hide');
        nine.classList.remove('hide');
        ten.classList.remove('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'formal') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.remove('hide');
        four.classList.remove('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.remove('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

    
    if (datainfo == 'casual') {
        one.classList.remove('hide');
        two.classList.remove('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.remove('hide');
        eight.classList.remove('hide');
        nine.classList.remove('hide');
        ten.classList.add('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

    if (datainfo == 'creative') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.add('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'holland') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.add('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

    if (datainfo == 'marzoni') {
        one.classList.remove('hide');
        two.classList.add('hide');
        three.classList.remove('hide');
        four.classList.add('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.remove('hide');
        eight.classList.add('hide');
        nine.classList.remove('hide');
        ten.classList.add('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'ermenegildo') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.add('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

    if (datainfo == 'piacenza') {
        one.classList.remove('hide');
        two.classList.add('hide');
        three.classList.remove('hide');
        four.classList.add('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.remove('hide');
        eight.classList.add('hide');
        nine.classList.remove('hide');
        ten.classList.add('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'dormeuil') {
        one.classList.remove('hide');
        two.classList.remove('hide');
        three.classList.remove('hide');
        four.classList.remove('hide');
        five.classList.remove('hide');
        six.classList.remove('hide');
        seven.classList.remove('hide');
        eight.classList.remove('hide');
        nine.classList.remove('hide');
        ten.classList.remove('hide');
        eleven.classList.remove('hide');
        twelve.classList.remove('hide');
    }

    if (datainfo == 'lanificio') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.add('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

    if (datainfo == 'scabal') {
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        six.classList.add('hide');
        seven.classList.add('hide');
        eight.classList.add('hide');
        nine.classList.add('hide');
        ten.classList.add('hide');
        eleven.classList.add('hide');
        twelve.classList.add('hide');
    }

}


//hide responsive filter side bar menu
let closeicon = document.querySelector('.closeicon')
let filterbtn = document.querySelector('#filterbtn')
closeicon.onclick = () => {
    let closefilter = document.querySelector('#filtersidebar')
    closefilter.classList.remove('appear');
}

filterbtn.onclick = () => {
    let closefilter = document.querySelector('#filtersidebar')
    closefilter.classList.add('appear');
}