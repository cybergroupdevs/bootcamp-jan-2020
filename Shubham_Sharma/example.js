function example(a){
    console.log(a);
    return function innerExample(b){
        return a+b;
    }
}

var sum = example(10);
console.log(sum(5));
