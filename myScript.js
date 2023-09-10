let what = 0;
let sum;

function myplus(){    
    console.log(1)
    what = document.getElementById("plus").value;
}
function myminus(){    
    console.log(2)
    what = document.getElementById("minus").value;
}
function mydual(){    
    console.log(3)
    what = document.getElementById("dual").value;
}
function mydivision(){    
    console.log(4)
    what = document.getElementById("division").value;
}   


function myequal() {
    let x = document.getElementById("One").value;
    let y = document.getElementById("Two").value;
    console.log(what)
    if (what == 1){
        sum = Number(y) + Number(x)
        console.log(1)
    } else if (what == 2){
        sum = Number(y) - Number(x)
        console.log(2)
    } else if (what == 3){
        sum = Number(y) * Number(x)
        console.log(3)
    } else if (what == 4){
        sum = Number(y) / Number(x)
        console.log(4)
    }

    document.getElementById("answer").innerHTML = sum ;
    console.log(sum)
}
