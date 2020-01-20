function insert(num){
    // calculator.display.value += num
    console.log(num,num.target, "ab")

    document.getElementById("display").value = document.getElementById("display").value + num;
    
}

function solve(){
    txt = document.getElementById("display").value;
    l = txt.length;
    
    numb = txt.slice(4, l-1); 

    // var pos = txt.indexOf("√") ;
    // txt = txt[0, pos] + "Math.sqrt(" + 

    // if (txt.startsWith("√")) {

    //     document.getElementById("display").value = Math.sqrt(txt.slice(1));
    //     }

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

//     if (txt.startsWith("Sin(") ) {  
//         document.getElementById("display").value = Math.sin(numb)
//     }
//     else if (txt.startsWith("Cos(") ) {  
//         document.getElementById("display").value = Math.Cos(numb)
//     }
//     else if (txt.startsWith("Tan(") ) {  
//         document.getElementById("display").value = Math.tan(numb)
//     }
    
//     else if (txt.startsWith("√")) {

//         document.getElementById("display").value = Math.sqrt(txt.slice(1));
//     }

//     else if (txt.charAt(l-1)=="!") {
//         ans = Factorial(txt.slice(0, l-1));
//         document.getElementById("display").value = ans
//     }
    
//     else {
        
// }

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
    // console.log(n, "shivani")
    var ans=1; 
      
    for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
} 

// function squareRoot(str){
//     l = txt.length;
//     for(var i=0; i<l; i++ {
//         if txt[i] == "√" 
//     })

// }

function cleanByEntry(){
    l = txt.length;
    txt =  document.getElementById("display").value;
    document.getElementById("display").value = txt.replace(txt[l-1] , "");
}