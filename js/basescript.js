//SLIDING MENU BAR
//declare variables related to webpage element
let menuicon = document.querySelector('#menuopen');
let navsidebar = document.querySelector('#sideBar');
let crossmenu = document.querySelector('#menuclose');

//Open sliding menu bar
menuicon.onclick = () => {
    navsidebar.classList.toggle('open');
    crossmenu.classList.toggle('show');
    menuicon.classList.toggle('hide');
}

//Close sliding menu bar
crossmenu.onclick = () => {
    navsidebar.classList.remove('open');
    crossmenu.classList.remove('show');
    menuicon.classList.remove('hide');
}



//button shows subscription is done
subscribebtn = document.querySelector(".subscribe");

subscribebtn.onclick = function () {
    this.innerHTML = "<div class='subscribedtext' style='font-weight: bold;'>Subscribed!</div>"
}

//show a validation pass test
window.onload = init;

function init() {
    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) alert("Successfully Subcribed!");
        return false;
    }

}

