
function sendJSON()
{
    fetch('https://localhost:44371/api/signup')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data)
{
    var users = document.getElementById("users");
    console.log(users);
    console.log(data.length);
  
    for (var i = 0; i < data.length; i++) {
      var object = data[i];
      var arrayOfKeys = Object.keys(object)
      console.log(arrayOfKeys)

      var tr = document.createElement("TR");
      tr.setAttribute("id", `tr${i}`);
      var k = 0;
      for (var j in data[i]){
       
        var td = document.createElement("TD");
        td.innerHTML = data[i].arrayOfKeys[k];
        console.log(document.getElementById(`tr${i}`));

        document.getElementById(`tr${i}`).appendChild(td);
        k = k + 1;
      }
      document.getElementById("myTable").appendChild(tr);
        
        
    }
}
}