

//  get the value of the input filed when button is pressed
document.getElementById("convert_btn").addEventListener("click", function () {

    console.log("hey I am pressed")

    let inputFieldValue = document.getElementById("inputField")

    // set all the span with with the input value
    let inputSpan = document.querySelectorAll("#input_value")
    // console.log(inputSpan)
    
    // DOM iteration Costs so fix it later.*****
    for(let x=0; x<inputSpan.length;x++){
        inputSpan[x].textContent = inputFieldValue.value
    }
    
    meterToFeet(inputFieldValue.value)
    feetToMeter(inputFieldValue.value)
    litersToGallons(inputFieldValue.value)
    gallonsToLittrs(inputFieldValue.value)
    kilosToPound(inputFieldValue.value)
    poundToKilos(inputFieldValue.value)
    

})
// Now create function for every value
function meterToFeet(value){
    let result = value*3.281
    document.getElementById("feet_value").textContent = result.toFixed(3)
}
function feetToMeter(value){
    let result = value*0.3048
    document.getElementById("meters_value").textContent = result.toFixed(3)
}
function litersToGallons(value){
    let result = value*0.264
    document.getElementById("gallons_value").textContent = result.toFixed(3)
}
function gallonsToLittrs(value){
    let result = value*3.785
    document.getElementById("liters_value").textContent = result.toFixed(3)
}
function kilosToPound(value){
    let result = value*2.204
    document.getElementById("pounds_value").textContent = result.toFixed(3)
}
function poundToKilos(value){
    let result = value*0.454
    document.getElementById("kilos_value").textContent = result.toFixed(3)
}