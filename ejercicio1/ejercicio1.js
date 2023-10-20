var param1

function separaNumeros(...param1){
    var array=new Array();

    if(param1!=NaN){
        array.push(param1);
    }


    return array;
}


console.log(separaNumeros("Hola"));
console.log(separaNumeros("Hola","Adiós"));
console.log(separaNumeros("Hola","Adiós",123));
console.log(separaNumeros("Hola","Adiós",123,undefined,222222,new Date()));