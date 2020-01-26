//function for displaying to output screen
function display(val){
    document.getElementById("result").value+=val ;
}
//function for computing
function compute(){
    let x = document.getElementById("result").value;
    len = x.length;
    if(x.charAt(len-1)=="!"){
        ans = factorial(x.slice(0, len-1));
        document.getElementById("result").value = ans 
    }
    else{
        x = x.replace(/sin/g, "Math.sin");
        x = x.replace(/cos/g, "Math.cos");
        x = x.replace(/tan/g, "Math.tan");
        x = x.replace(/√/g, "Math.sqrt")
        x = x.replace(/x/g, "*")
        x = x.replace(/÷/g, "/")
        let y = eval(x) 
        document.getElementById("result").value = y }
}

//function for clearing screen 
function cscreen(){ 
    document.getElementById("result").value = ""; 
} 

//function for clearing screen by entry
function cescreen(){
    var str = document.getElementById("result").value;
    var res = str.slice(-1);
    document.getElementById("result").innerHTML = str.replace("res","");
}

//for factorial
function factorial(n) { 
    var fact=1; 
    for (var i = 2; i <= n; i++) 
        fact = fact * i; 
    return fact; 
} 
    


        
