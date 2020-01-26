//function for displaying to output screen
function display(val){
    document.getElementById("result").value+=val ;
}
//function for computing
function compute(){
    let x = document.getElementById("result").value;    
    len = x.length;
    if (x.charAt(l-1)=="!") {
        ans = Factorial(txt.slice(0, l-1));
        document.getElementById("display").value = ans
        }

    else{
    
    x = x.replace(/sin/g, "Math.sin");
    x = x.replace(/cos/g, "Math.cos");
    x = x.replace(/tan/g, "Math.tan");
    x = x.replace(/√/g, "Math.sqrt");
    x = x.replace(/x/g, "*");
    x = x.replace(/÷/g, "/");



    let y = eval(x);
    document.getElementById("result").value = y;
}
}

//function for clearing screen 
function cscreen(){ 
    document.getElementById("result").value = ""; 
} 

//function for clearing screen by entry
function cescreen(){
    text = document.getElementById("result").value;
    lastVal = text[text.length -1];
    document.getElementById("result").value = id.replace("lastVal","");
}

function factorial(n) { 
    var fact=1; 
    for (var i = 2; i <= n; i++) 
        fact = fact * i; 
    return ans; 
} 
    


        
