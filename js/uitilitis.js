function getInputFieldValueById(id){
    const inputField = document.getElementById(id).value;  // ekhaner amara j id dibo sei value tai pabo
    const inputNumber = parseFloat(inputField);  // ekhane id number ta k number a convert kora hoyse.
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValueNumber = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValueNumber);
    return textNumber;

}


function btnInfo(id){
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cash-out-section").classList.add("hidden");
    document.getElementById("transitionInfo").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}