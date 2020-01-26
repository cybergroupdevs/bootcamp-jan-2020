//function for inserting any value at screen
function insert(input){
    document.getElementById("display").value+=input;
}

//function for calculating x!
function factorial(){
    var ans=1; 
    n= document.getElementById("display").value;
    for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    
    document.getElementById("display").value=ans;
    }

//function for sin,cos,tan,sqrt
function operation(opr){
    val=document.getElementById("display").value;
    if(opr=='tan')
        new_val=Math.tan(val);
    else if(opr=='sin')
        new_val=Math.sin(val);
    else if(opr=='cos')
        new_val=Math.cos(val);
    else
        new_val=Math.sqrt(val);

    document.getElementById("display").value=new_val;
}

//function for CE button
function clearEntry(){
    txt = document.getElementById("display").value;
    l = txt.length;
    document.getElementById("display").value = txt.replace(txt[l-1] , "");
}

//function for C button
function allClear(){
document.getElementById("display").value="";
}

//function for = button
function calc_equal(){
    document.getElementById("display").value=eval(document.getElementById("display").value);
}