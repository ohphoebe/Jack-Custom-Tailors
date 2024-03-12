
//remove item from bag once click close icon
let remove = document.querySelector('#removeitem');
let emptybag = document.querySelector('.emptycontainer');
let boxbg = document.querySelector('.itemgroup');
remove.onclick = () => {
    emptybag.classList.toggle('appear');
    boxbg.style.cssText = 'background-color: transparent; border: none;';
    document.querySelector('.subtotalprice').innerHTML = "<p class='subtotalprice'>$0</p>"
    document.getElementById('checkoutbtn').style.cssText = 'pointer-events:none';
}

//bag page's input stepper 
const itemQuantity = document.getElementById("quantity");
function inputstep(btn){
    //value calculation variable
    let id = btn.getAttribute("id");
    let min = itemQuantity.getAttribute("min");
    let max = itemQuantity.getAttribute("max");
    let step = itemQuantity.getAttribute("step");
    let value = itemQuantity.getAttribute("value");
    let calcStep = (id == "plus") ? (step*1) : (step * -1);
    let newValue = parseInt(value) + calcStep;

    //setting newValue to value
    if(newValue >= min && newValue <= max){
        itemQuantity.setAttribute("value", newValue);
    }

    //for auto calc of subtotal price
    let subTotalCalc = newValue*372;
    let subActualCalc = newValue*465;
    document.querySelector('.subtotalprice').innerHTML = "<p class='subtotalprice'>$"+subTotalCalc+"</p>";
    document.querySelector('.discountprice').innerHTML = "<p class='discountprice'> NOW $"+subTotalCalc+"</p>"
    document.querySelector('.actualprice').innerHTML = "<p class='actualprice'>$"+subActualCalc+"</p>"
    //disable checkout button when quantity is 0
    if (value==0 || newValue==0 || subTotalCalc==0) {
        document.getElementById('checkoutbtn').style.cssText = 'pointer-events:none';
        document.querySelector('.subtotalprice').innerHTML = "<p class='subtotalprice'>$0</p>";
    } else {
        document.getElementById('checkoutbtn').style.cssText = 'pointer-events:auto';
    }
}




