function celciusValueToFarenheit(celciusValue) {
    console.log("convert() running for celcius value " + celciusValue);
    return celciusValue*(9/5) + 32;
}

function kgValueToLb(kgValue) {
    return kgValue*2.2;
}

function kmValueToMiles(kmValue) {
    return kmValue/1.609;
}

function convert(fromElementId, toElementId, conversionFunction) {
    console.log("convert() running for element " + fromElementId);
    var fromElement = document.getElementById(fromElementId);
    if (fromElement.value != "") {
        console.log("Got an input value: " + parseFloat(fromElement.value));
        var toValue = conversionFunction(fromElement.value);
        console.log("Converted that to: " + toValue);
        var toElement = document.getElementById(toElementId);
        toElement.value = toValue;
    }
}

function convertTemperature() {
    console.log("convertTemperature() running");
    convert("celcius", "farenheit", celciusValueToFarenheit);
}

function convertWeight() {
    console.log("convertWeight() running");
    convert("kg", "lb", kgValueToLb);
}

function convertDistance() {
    console.log("convertDistance() running");
    convert("km", "mile", kmValueToMiles);
}