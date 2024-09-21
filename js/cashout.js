// cashout section
document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault()
    
    const cashoutMoney = getInputFieldValueById('cashout-input')
    const cashoutPin = getInputFieldValueById('cashout-pin')
    const balance = getTextFieldValueById('previousAmount')

 
    if ( cashoutPin === '1234'){

        const cashMoney = parseFloat(cashoutMoney);
        const preAmount = parseFloat(balance)
        const newBalance = preAmount - cashMoney;

        if ( cashMoney <= preAmount){
            document.getElementById('previousAmount').innerText = newBalance;
        }else{
            alert('insuccient balance for cashout')
        }

        const p = document.createElement('p');
        p.classList.add('bg-yellow-300')
        p.innerText = `Cashout ${cashMoney} tk. New balance ${newBalance}`;
        document.getElementById('transection-history').appendChild(p)
        
    }else{
        alert('something is worng went, please tryagain')
    }

})