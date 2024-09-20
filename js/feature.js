// feature section

// add money feature
document.getElementById('add-feature').addEventListener('click', function(){

    const addAmount = showSectionById('addmoney')
    addAmount.classList.remove('hidden') 
})

// cashout money feature
document.getElementById('cashout-feature').addEventListener('click', function(){

    const cashOut = showSectionById('cashout')
    cashOut.classList.remove('hidden')
})

// transection money feature
document.getElementById('transection-feature').addEventListener('click', function(){
  
    const transection = showSectionById('transection')
    transection.classList.remove('hidden')
}) 