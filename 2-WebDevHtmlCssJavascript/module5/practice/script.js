function compute()
{
    p = document.getElementById("principal").value;
}

function updateRate() {
    let rateVal = document.getElementById("rate").value;
    console.log("Rate: ", rateVal);
    let rateElement = document.getElementById("rate_val");
    rateElement.innerText = rateVal;
}