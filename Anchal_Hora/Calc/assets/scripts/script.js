function insert(num){
    document.calc.display.value= document.calc.display.value+num;
}

function fact (n){
    var ans=1;
    for(var i=2;i<=n;i++)
    ans=ans*i;
    return ans;
}

function insertOperator(op){
    txt = document.getElementById("display").value;
    l = txt.length;

    if ((txt.charAt(l-1) != "+") && (txt.charAt(l-1) != "-") && (txt.charAt(l-1) != "X") && (txt.charAt(l-1) != "/")) {
        document.getElementById("display").value = txt+ String(op)
    }
}
