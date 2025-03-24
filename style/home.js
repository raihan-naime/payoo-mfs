// add money to the account
/**
 * Step-1: add event handler
 * prevent page reload after form submit
 * Step-2: get money to be added to the account balance
 * get the pin number
 * 
 * Step-3: verify the pin number
 * 
 */

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after from submit
        event.preventDefault();
        
        
        // step-2: 
        const addMoneyInput = document.getElementById('input-add-money').value;
        // get pin number
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoneyInput, inputPinNumber);

        // Step-3: verify Pin number
        // wrong way to validate pin number
        let newBalance = 0;
        if(inputPinNumber === '1111'){

            // Step-4: get the current balance
            const balance = document.getElementById('account-balance').innerText;
            
            // Step-5: add addMoneyInput with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            

            // Step-6: update balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('wrong phone number or pin')
        }
    })