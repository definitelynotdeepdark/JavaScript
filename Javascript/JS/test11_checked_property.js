const subcheckbox = document.getElementById("subcheckbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");
const submit = document.getElementById("submitbut");



submit.onclick = function(){
    // sub condition
    if(subcheckbox.checked){
        subresult.textContent = "Thank you for Subscribed!";
    }
    else{
        subresult.textContent = "You are not Subscribed";
    }
    // payment condition
    if(visa.checked){
        payresult.textContent = "Pay with Visa☺"
    }
    else if(mastercard.checked){
        payresult.textContent = "Pay with Mastercard☺"
    }
    else if(paypal.checked){
        payresult.textContent = "Pay with Paypal☺"
    }
    else {
        payresult.textContent = "You must Select Payment type"
    }



}