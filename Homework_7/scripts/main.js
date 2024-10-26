function setDynamicImage() {
    const image = document.getElementById("dynamic-image");

    if (window.innerWidth > 640) {
        image.src = "images/machine1280w.jpg";
    }
    else {
        image.src = "images/machine640w.jpg";
    }
}


function compute() {
    console.log("'=' button pressed!");

    const value_1 = parseFloat(document.getElementById("num_1").value);
    const value_2 = parseFloat(document.getElementById("num_2").value);
    const operator = document.getElementById("operator").textContent.trim();

    let result;
    switch (operator) {
        case '+':
            result = value_1 + value_2;
            break;
        case '-':
            result = value_1 - value_2;
            break;
        case '*':
            result = value_1 * value_2;
            break;
        case '/':
            result = value_2 !== 0 ? value_1 / value_2 : "Error: Divion by zero.";
            break;
        case '≥':
            if (value_1 > value_2) 
            {
                result = value_1 + " is greater than " + value_2 + "." 
            } 
            else if (value_1 === value_2) 
            {
                result = value_1 + " is equal to " + value_2 + "." 
            } else 
            {
                result = value_1 + " is not greater than " + value_2 + ".";
            }       
            break;
        case '≤':
            if (value_1 < value_2) 
                {
                    result = value_1 + " is less than " + value_2 + "." 
                } 
                else if (value_1 === value_2) 
                {
                    result = value_1 + " is equal to " + value_2 + "." 
                } else 
                {
                    result = value_1 + " is not less than " + value_2 + ".";
                }            
                break;  
        default:
            result = 'Error: Invalid operator';
            break;
    }

    alert(`Answer: ${result}`);
}

function setAddOperator() { document.getElementById("operator").textContent = "+" }
function setSubtOperator() { document.getElementById("operator").textContent = "-" }
function setMultOperator() { document.getElementById("operator").textContent = "*" }
function setDivOperator() { document.getElementById("operator").textContent = "/" }
function setGTEOperator() { document.getElementById("operator").textContent = "≥" }
function setLTEOperator() { document.getElementById("operator").textContent = "≤" }



// Call the setDynamicImage function when the DOM is loaded.
document.addEventListener("DOMContentLoaded", setDynamicImage);
    
// Listen for a resize event and call the function on resize.
window.addEventListener("resize", setDynamicImage);

document.getElementById("equals-bttn").addEventListener("click", compute);

document.getElementById("calculator-bttn-add").addEventListener("click", setAddOperator);
document.getElementById("calculator-bttn-subt").addEventListener("click", setSubtOperator);
document.getElementById("calculator-bttn-mult").addEventListener("click", setMultOperator);
document.getElementById("calculator-bttn-div").addEventListener("click", setDivOperator);
document.getElementById("gte-bttn").addEventListener("click", setGTEOperator);
document.getElementById("lte-bttn").addEventListener("click", setLTEOperator);