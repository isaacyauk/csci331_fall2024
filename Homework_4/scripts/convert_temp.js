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


function clearCelsiusField (event) {
   {
      console.log("I see " + event.key + "'s of green..."); // Debugging
      document.getElementById("C_in").value = ""; // Clears the value in the Celsius field.
      console.log("The Celsius field should be cleared"); // Debugging
   }
}


function clearFahrenheitField (event) {
   {
      console.log("I see " + event.key + "'s of green..."); // Debugging
      document.getElementById("F_in").value = ""; // Clears the value in the Celsius field.
      console.log("The Fahrenheit field should be cleared"); // Debugging
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
}


function convertCtoF(Cels) { 
   // Formula:  °F = °C * 9/5 + 32
   // Set the Fahrenheit field to the converted value.
   document.getElementById("F_in").value = (Cels * (9/5)) + 32;
}


function convertFtoC(Farh) {
   // °C = (°F - 32) * 5/9
   // Set the Celsius field to the converted value.
   document.getElementById("C_in").value = (Farh - 32) * (5/9);
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
