

document.getElementById("btn-add-money").addEventListener("click", function(e){
    e.preventDefault();
     const addMoney = getInputFieldValueById("input-add-money");
     const passMoney = getInputFieldValueById("input-pass-money");
     const currentBalance = getTextFieldValueById("account-balance");
     const newBalance = currentBalance + addMoney;
     
     document.getElementById("account-balance").innerText = newBalance;

     const addTransition = document.createElement("div");
     addTransition.style.backgroundColor="yellow";
     addTransition.innerHTML = `
     <p>Avalable Blance: ${currentBalance}</p>
     <p>You added ${addMoney} to your account. Your new balance is ${newBalance}.</p>
     <p>Total Blance: ${newBalance}</p>
     `;
     document.getElementById("transitionInfo").appendChild(addTransition); // transitionInfo er vitore p ta k deye dauya hoyse 

})


document.getElementById("side-cash-out-btn").addEventListener("click", function(e){
    e.preventDefault();

    btnInfo("cash-out-section");    


    document.getElementById("cash-out").addEventListener("click", function(e){
        e.preventDefault();
        const addMoney = getInputFieldValueById("inputAddMoneyCashOut");
        if(isNaN(addMoney)){
            alert("Please enter a valid number");
            return;
        }
        const passMoney = getInputFieldValueById("inputPassCashOut");
        const currentBalance = getTextFieldValueById("account-balance");
        const newBalance = currentBalance - addMoney;
        
        document.getElementById("account-balance").innerText = newBalance;
        
        
        
    })
    
});


document.getElementById("transition").addEventListener("click", function(e){
    e.preventDefault();
    btnInfo("transitionInfo");

    
})


document.getElementById("blance-added").addEventListener("click", function(){
    btnInfo("add-money-section");
    console.log("balance added seciton clicked");
    
 });