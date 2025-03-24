document.getElementById('btn-add-money').addEventListener('click', function(event){
    const inputAmount = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('input-pin-number').value;
    
    if(inputPin === '1111'){
        const balance = document.getElementById('account-balance').innerText;
        
        const inputAmountNumber = parseFloat(inputAmount);
        const balanceNumber = parseFloat(balance);
        
        const newBalance = inputAmountNumber + balanceNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid PIN Number');
    }

})