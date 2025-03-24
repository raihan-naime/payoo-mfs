document.getElementById('button-login').addEventListener('click', function(event){
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === '5555' && pinNumber === '1111'){
        console.log('Welcome You are logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong Phone Number or PIN Number');
    }

})