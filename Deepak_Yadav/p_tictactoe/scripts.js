var options = "X"; //global declaration
//for alternate inputs
function clicker(button) {
  if (options == "X") {
    options = "O";
    setButton(button, options);
  } else {
    options = "X";
    setButton(button, options);
  }
}
//function for setting correct input to a button
function setButton(button, options) {
  var btn = document.getElementById("b" + button);
  btn.innerHTML = options;
  btn.disabled = true;
  //function call for checking combinations
  checker();
}
//function for checking any perfect combinations
function checker() {
  var ids = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
  for (let i = 0; i < ids.length; i++) {
    ids[i] = document.getElementById(ids[i]).innerHTML;
  }
  //conditions required for winning
  if (
    (ids[0] == "X" || ids[0] == "O") &&
    ids[0] == ids[1] &&
    ids[1] == ids[2]
  ) {
    highLight("b1", "b2", "b3");
  } else if (
    (ids[0] == "X" || ids[0] == "O") &&
    ids[0] == ids[3] &&
    ids[3] == ids[6]
  ) {
    highLight("b1", "b4", "b7");
  } else if (
    (ids[0] == "X" || ids[0] == "O") &&
    ids[0] == ids[4] &&
    ids[4] == ids[8]
  ) {
    highLight("b1", "b5", "b9");
  } else if (
    (ids[1] == "X" || ids[1] == "O") &&
    ids[1] == ids[4] &&
    ids[4] == ids[7]
  ) {
    highLight("b2", "b5", "b8");
  } else if (
    (ids[2] == "X" || ids[2] == "O") &&
    ids[2] == ids[5] &&
    ids[5] == ids[8]
  ) {
    highLight("b3", "b6", "b9");
  } else if (
    (ids[2] == "X" || ids[2] == "O") &&
    ids[2] == ids[4] &&
    ids[4] == ids[6]
  ) {
    highLight("b3", "b5", "b7");
  } else if (
    (ids[3] == "X" || ids[3] == "O") &&
    ids[3] == ids[4] &&
    ids[4] == ids[5]
  ) {
    highLight("b4", "b5", "b6");
  } else if (
    (ids[6] == "X" || ids[6] == "O") &&
    ids[6] == ids[7] &&
    ids[7] == ids[8]
  ) {
    highLight("b7", "b8", "b9");
  }
}
//background color will change once any perfect combination occurs
function highLight(elem1, elem2, elem3) {
  btnDisable(); //after winning all the buttons will get disabled
  document.getElementById(elem1).style.backgroundColor = "red";
  document.getElementById(elem2).style.backgroundColor = "red";
  document.getElementById(elem3).style.backgroundColor = "red";
  //function to show the congratulations message
  setTimeout(function() {
    //using timeout function to hold the execution of alert
    alert("Congratulations!!You won!");
  }, 100);
}
//once a player wins all buttons will be disabled until he resets
function btnDisable() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).disabled = true;
  }
}
//game will start from starting with a new different background color
function reset() {
  for (let i = 1; i <= 9; i++) {
    var b = document.getElementById("b" + i);
    b.innerHTML = "#";
    b.style.backgroundColor = "#99780b";
    b.disabled = false;
  }
}
