// comece a criar a sua função add na linha abaixo
function add (three, five){
    return three + five;

}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (four, six){
    let zero = 0;
    for (let plus = 1; plus <= six; plus++){
        zero = add (zero, four);

    }
    return zero;   
} 

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (three, four){
    let one = 1;
    for (let plus = 1; plus <= four; plus++){
        one = multiply (one, three);

    }
    return one;
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (five){
    let one = 1;
    for (let plus = 1; plus <= five; plus++){
        one = multiply (one, plus);
    }
    return one;
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(seven){ 
    let one = 1;
    let zero = 0;
    for (let plus = 1; plus < seven; plus++){
        let two = zero;
        zero = one
        one = add (one, two);

    }
    return one;
}


// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
