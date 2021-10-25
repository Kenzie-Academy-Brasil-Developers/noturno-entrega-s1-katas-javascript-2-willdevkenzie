// comece a criar a sua função add na linha abaixo
function add (y, u){
    return y + u;

}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (w, g){
    let num = 0;
    for (let dev = 1; dev <= g; dev++){
        num = add (num, w);

    }
    return num;   
} 

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x, n){
    let num = 1;
    for (let dev = 1; dev <= n; dev++){
        num = multiply (num, x);

    }
    return num;
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (g){
    let num = 1;
    for (let dev = 1; dev <= g; dev++){
        num = multiply (num, dev);
    }
    return num;
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){
    let num = 1;
    let num2 = 0;
    for (let dev = 1; dev < n; dev++){
        let num3 = num2;
        num2 = num
        num = add (num, num3);

    }
    return num;
}


// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
