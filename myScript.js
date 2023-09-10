let what = 0;
let sum;

function myplus(){    
    what = document.getElementById("plus").value;
}
function myminus(){    
    what = document.getElementById("minus").value;
}
function mydual(){    
    what = document.getElementById("dual").value;
}
function mydivision(){    
    what = document.getElementById("division").value;
}   


function myequal() {
    let x = document.getElementById("One").value;
    let y = document.getElementById("Two").value;
    let error;
    
    if (what == 1){
        sum = Number(x) + Number(y)
    } else if (what == 2){
        sum = Number(x) - Number(y)
    } else if (what == 3){
        sum = Number(x) * Number(y)
    } else if (what == 4){
        if(y == 0){
            sum = 'Do not divide by zero'
            error = 1;
        } else {
          sum = Number(x) / Number(y)  
        }
        
    }

    if (error == 1){
        document.getElementById("answer").innerHTML = sum;
    } else{
        document.getElementById("answer").innerHTML = (Math.round(sum * 100) / 100).toFixed(2) ;
    }

    
}
