function calculate() {
  var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var dG = document.getElementById("dG").value;
  
  if(dG == "" || q1 == "" || q2 == ""){
     document.getElementById("neededGrade").innerHTML = "Please fill in all input fields above!";
  } else {
    var neededGrade = (dG - (0.425 * q1 + 0.425 * q2)) / 0.15;
    document.getElementById("neededGrade").innerHTML = "Grade Needed On Midterm: " + neededGrade.toPrecision(5) + "%";
  }
   
}