// reuseable function for input
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function getTextFieldValueById (id){
    const inputInnerText = document.getElementById(id).innerText;
    return inputInnerText;
}

function showSectionById (id){
 document.getElementById('addmoney').classList.add('hidden')
 document.getElementById('cashout').classList.add('hidden')
 document.getElementById('transection').classList.add('hidden')

 document.getElementById(id).classList.remove('hidden')
} 
