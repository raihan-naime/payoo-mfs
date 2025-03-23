// add money to the account

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after from submit
        event.preventDefault();
        
        
        // step-2: 
        const addMoneyInput = document.getElementById('input-add-money').value;
        // get pin number
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoneyInput, inputPinNumber);
    })