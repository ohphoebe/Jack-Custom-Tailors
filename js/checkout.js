
//button shows subscription is done
applybtn = document.querySelector(".apply");

applybtn.onclick = function () {
    this.innerHTML = "<div class='applieddtext' style='font-weight: bold;'>Applied!</div>"
}

//show a validation pass test
window.onload = init;

function init() {
    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) alert("Successfully Applied!");
        return false;
    }

}