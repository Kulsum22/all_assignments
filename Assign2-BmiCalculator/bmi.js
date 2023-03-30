function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    
    if (height === "" || weight === "") {
      alert("Please enter both height and weight.");
      return;
    }
    
    var bmi = weight /(height*height);
    bmi = bmi.toFixed(2);
    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your BMI is " + bmi;
  }
  