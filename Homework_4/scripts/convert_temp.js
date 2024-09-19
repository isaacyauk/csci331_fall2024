window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   const FahrenheitInputField = document.getElementById("F_in");
   const CelsiusINputField = document.getElementById("C_in");
   const ConvertButton = document.getElementById("convertButton");

   FahrenheitInputField.addEventListener("keydown", clearCelsiusField);
   CelsiusINputField.addEventListener("keydown", clearFahrenheitField);
   ConvertButton.addEventListener("click", convertTemps);
}


function clearCelsiusField () {
   {
      document.getElementById("C_in").value = ""; // Clears the value in the Celsius field.
   }
}


function clearFahrenheitField () {
   {
      document.getElementById("F_in").value = ""; // Clears the value in the Celsius field.
   }
}


function convertTemps() {
   const FahrenheitInputField = document.getElementById("F_in");
   const CelsiusINputField = document.getElementById("C_in");

   // Check to see if there has been a value entered into the Fahrenheit field, and then call the method to convert that value to Celsius.
   if (FahrenheitInputField.value != "") {
      convertFtoC(FahrenheitInputField.value);
   } 

   // Check to see if there has been a value entered into the Celsius field, and then call the method to convert that value to Fahrenheit.
   if (CelsiusINputField.value != "") {
      convertCtoF(CelsiusINputField.value);
   }

   changeImage();
}


function convertCtoF(Cels) { 
   // Formula:  °F = °C * 9/5 + 32
   // Set the Fahrenheit field to the converted value.
   document.getElementById("F_in").value = (Cels * (9/5)) + 32;
}


function convertFtoC(Farh) {
   // Formula:  °C = (°F - 32) * 5/9
   // Set the Celsius field to the converted value.
   document.getElementById("C_in").value = (Farh - 32) * (5/9);
}


function changeImage() {
   // The image changer is based on Fahrenheit, so save the element for cleaner reference.
   let FahTemp = document.getElementById("F_in");

   // 32 or less, but above -200: cold
   if (FahTemp.value < 32 && FahTemp.value > (-200)) {
      // set image to cold
      document.getElementById("weatherIcon").setAttribute("src", "images/cold.png")
   } 
   // 90 or more, but below 200: hot
   else if (FahTemp.value >= 90 && FahTemp.value < 200) {
      document.getElementById("weatherIcon").setAttribute("src", "images/hot.png")
   }
   // 200 or more, -200 or less: dead
   else if (FahTemp.value > 200 || FahTemp.value <= (-200)) {
      document.getElementById("weatherIcon").setAttribute("src", "images/dead.png")
   }
   // between hot and cold: cool
   else {
      document.getElementById("weatherIcon").setAttribute("src", "images/cool.png")
   }

   // Ensure both input fields are blank
   clearCelsiusField();
   clearFahrenheitField();
}