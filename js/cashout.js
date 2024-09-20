// cashout section
document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault()
    
    const cashoutMoney = getInputFieldValueById('cashout-input')
    const cashoutPin = getInputFieldValueById('cashout-pin')
    const balance = getTextFieldValueById('previousAmount')

 
    if ( cashoutPin === '1234'){

        if ( parseFloat(cashoutMoney) <= parseFloat(balance)){
            document.getElementById('previousAmount').innerText = parseFloat(balance) - parseFloat(cashoutMoney)
        }else{
            alert('insuccient balance for cashout')
        }
        
    }else{
        alert('something is worng went, please tryagain')
    }

})