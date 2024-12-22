
function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function display(result){
    document.getElementById("myh1").textContent = result;
}

sum(display,5,5)