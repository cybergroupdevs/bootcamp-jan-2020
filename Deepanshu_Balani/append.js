function myfunc(){

    var node = document.createElement("li");   

    
    var textnode = document.createTextNode(document.getElementById("inpt").value);         

    node.appendChild(textnode);                              

    document.getElementById("list").appendChild(node);   
    console.log(list);
    
}