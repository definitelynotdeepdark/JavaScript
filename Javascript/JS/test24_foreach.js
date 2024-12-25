        /*array.forEach(callback)
        element,index,array*/

/*let numbers = [1,2,3,4,5];
numbers.forEach(multiple);
numbers.forEach(display);


function multiple(element,index,array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}*/


let names = ["john","JANE","joe","Jim"];
names.forEach(capitalize);
names.forEach(display);

function uppercase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowercase(element,index,array){
    array[index] = element.toLowerCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element){
    console.log(element);
}