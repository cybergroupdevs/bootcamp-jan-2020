function display(val){
    document.getElementById("result").value+=val ;
}
function compute(){
    let x = document.getElementById("result").value;
    
    x = x.replace(/sin/g, "Math.sin");
    x = x.replace(/cos/g, "Math.cos");
    x = x.replace(/tan/g, "Math.tan");
    x = x.replace(/√/g, "Math.sqrt")
    x = x.replace(/x/g, "*")
    x = x.replace(/÷/g, "/")



    let y = eval(x) 
    document.getElementById("result").value = y 
}

function cscreen() 
         { 
             document.getElementById("result").value = "" 
         } 
function cescreen(){

}


        
