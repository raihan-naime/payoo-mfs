console.log(2);

// Search: form submit reloading the page

// step-1: set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); //   <-------- vejal for beginners
    console.log('log in button clicked')

    // step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    // step-4: validation of phone or pin
    // this is temporary. you should not do this
    if (phoneNumber === '5' && pinNumber === '1111') {
        console.log('You are logged in');

        // step-5: Allow user to use the website
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong phone number or pin')
    }
}) 