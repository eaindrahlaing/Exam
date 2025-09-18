function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  const resultElement = document.getElementById("result");

  if (weight === "" || height === "") {
    alert("Please enter both weight and height");
    return;
  }

  height = height / 100; // convert cm to meters
  let bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  let cssClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    cssClass = "result-underweight";
  } else if (bmi < 24.9) {
    category = "Normal";
    cssClass = "result-normal";
  } else if (bmi < 29.9) {
    category = "Overweight";
    cssClass = "result-overweight";
  } else {
    category = "Obese";
    cssClass = "result-obese";
  }

  // Clear previous classes
  resultElement.className = "";
  resultElement.classList.add(cssClass);
  resultElement.textContent = `Your BMI: ${bmi} (${category})`;
}

function resetFields() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
  resultElement.className = "";
}
