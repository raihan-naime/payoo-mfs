document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('cash-out-pin').value;
    
    if(cashOutPin === '1111'){
        const balance = document.getElementById('account-balance').innerText;
        
        const cashOutNumber = parseFloat(cashOutAmount);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('There is some Problem please try again');
    }
})