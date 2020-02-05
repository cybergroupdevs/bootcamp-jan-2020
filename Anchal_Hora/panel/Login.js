function func(){
    console.log("Hello Bhai lpg");
    window.location.href = "./admin/index.html";
    console.log("Hello Bhai b ehen");
    }
//document.getElementById("button").addEventListener("click",Gettoken)
function Gettoken(){

    var Sno=parseInt(document.getElementById("inputid").value);
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;
    
    
    var get = {
        "Sno":Sno,
        "Name":Username,
        "Email":Email,
        "Password":Password
    };
    console.log(get);
    //sendHTTPReq('POST', "http://localhost:51391/api/Panel", json).then(x => func() );
    var xhr= new XMLHttpRequest();
     var url="http://localhost:51391/api/Login";
     xhr.open('POST', url,true);
     xhr.responseType='json';
     xhr.setRequestHeader('Content-type','application/json');
     console.log(JSON.stringify(get));
      xhr.onload = () => {
         console.log(xhr.status);
         //var jwtToken = xhr.response.token;

   };
    xhr.send(JSON.stringify(get));
}

//     //console.log("Plain Object -- "+ get);
//     apiRequest(get)
    
// }
// function apiRequest(get){
//     let getObject = get;
//     //console.log("object in apirequest getObject);
//     const xhr= new XMLHttpRequest();
//     const url="http://localhost:51391/api/Login";
//     xhr.open('POST', url);
//     xhr.responseType='json';
//     xhr.setRequestHeader('Content-type','application/json');
//     //console.log(JSON.stringify(getObject));
//     debugger;
//      xhr.onload = () => {
//         console.log(xhr.status);
//         //var jwtToken = xhr.response.token;

//   };
//    xhr.send(JSON.stringify(json));
// }
// //         let jToken = {};
// //         jToken = xhr.response.token;
// //         //console.log(xhr.response.token);
// //         console.log(xhr.status);
// //         //console.log(xhr.response);
// //         console.log(jToken);
// //        // var jwtToken = xhr.response.token;

// //     };
// //     //console.log("object in apiRequest"+JSON.stringify(get));
// //     debugger;
// //     xhr.send(JSON.stringify(get));
// // }