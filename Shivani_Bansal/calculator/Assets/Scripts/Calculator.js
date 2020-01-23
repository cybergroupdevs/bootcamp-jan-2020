function insert(display_text){
    document.getElementById("display").value = document.getElementById("display").value + display_text;
}

function solve(){
    txt = document.getElementById("display").value;
    l = txt.length;
    numb = txt.slice(4, l-1); 
    if (txt.charAt(l-1)=="!") {
        ans = Factorial(txt.slice(0, l-1));
        document.getElementById("display").value = ans
        
    }
    else{
    txt = txt.replace(/√/g, "Math.sqrt");
    txt = txt.replace(/Sin/g, "Math.sin");
    txt = txt.replace(/Sin/g, "Math.sin");
    txt = txt.replace(/Cos/g, "Math.cos");
    txt = txt.replace(/Tan/g, "Math.tan");
    txt = txt.replace(/X/g, "*");
    txt = txt.replace(/÷/g, "/");
    ans= eval(txt);
    document.getElementById("display").value = ans
    }

}

function insertOperator(op){
    txt = document.getElementById("display").value;
    l = txt.length;

    if ((txt.charAt(l-1) != "+") && (txt.charAt(l-1) != "-") && (txt.charAt(l-1) != "X") && (txt.charAt(l-1) != "/")) {
        document.getElementById("display").value = txt+ String(op)
    }
}

function clean(){
    document.getElementById("display").value = ""
}

function Factorial(n) { 
    var ans=1; 
    for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
} 

function cleanByEntry(){
    txt = document.getElementById("display").value;
    l = txt.length;
    document.getElementById("display").value = txt.replace(txt[l-1] , "");
}