// access element login
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber = getInputFieldValueById('input-phone-number')
    const pinNumber = getInputFieldValueById('input-pin-number')
    
    if ( phoneNumber === '5' && pinNumber === '1234'){
        console.log('logged in')
        window.location.href = '/home.html'
    }else{
        alert('something is worng went, please try again')
    }
})