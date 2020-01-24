function insert(num){
    document.calc.display.value= document.calc.display.value+num;
}

function fact (n){
    var ans=1;
    for(var i=2;i<=n;i++){
    ans=ans*i;
}
    document.calc.display.value= ans;
}


function clearbyentry(){
text= document.calc.display.value;
len=text.length;
document.calc.display.value= text.replace(text[len-1], "")

}


