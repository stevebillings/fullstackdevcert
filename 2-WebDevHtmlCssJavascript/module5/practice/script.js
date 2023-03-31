function compute()
{
    let principalElement = document.getElementById("principal");
    let principal = parseFloat(principalElement.value);
    console.log("principal: value: ", principal, "; type: ", typeof(principal));
    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a positive value for Principal.");
        principalElement.focus();
        return;
    }
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    console.log("years: value: ", years, "; type: ", typeof(years));


    let interest = calculateInterest(principal, years, rate);
    console.log("interest: value: ", interest, "; type: ", typeof(interest));
    let total = principal + interest;

    let endYear = calculateEndYear(years);
    console.log("End year: ", endYear);

    let resultMessage = `If you deposit <mark>$${principal.toFixed(2)}</mark>,<br>at an interest rate of <mark>${rate.toFixed(2)}%</mark>,<br>` +
        `you will receive an total of <mark>$${total.toFixed(2)}</mark><br>in the year <mark>${endYear}</mark><br>`;
    document.getElementById("result").innerHTML = resultMessage.toString();
}

function calculateInterest(principal, years, rate) {
    return principal * years * rate/100;
}

function calculateEndYear(numYears) {
    let today = new Date();
    let endYear = today.getFullYear() + parseInt(numYears);
    return endYear;
}

function updateRate() {
    let rateValue = document.getElementById("rate").value;
    console.log("Rate: ", rateValue);
    let rateElement = document.getElementById("rate_val");
    rateElement.innerText = rateValue;
}