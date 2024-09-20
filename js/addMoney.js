// add money
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    
    const addAmount = getInputFieldValueById('add-input-amount')
    const addPinNumber = getInputFieldValueById('add-pin-number')
    const balance = getTextFieldValueById('previousAmount')

    if ( addPinNumber === '1234'){
       
        const amount = parseFloat(addAmount)
        const currentBalance = parseFloat(balance)
        const newBalance = amount + currentBalance;
        document.getElementById('previousAmount').innerText = newBalance;

    }else{
        alert('something is worng went, please tryagain')
    }
})