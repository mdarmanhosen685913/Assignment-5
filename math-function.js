// ////////////////////////// card 1 //
function donatedBtnId (donatedBtnId){
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    let dBalance = document.getElementById('dBalance').value;
    let donatedBalance = Number(dBalance);
    let cBalance = document.getElementById('cardBalance').innerText;
    let cardBalance = Number(cBalance);
    if(donatedBalance > 0 ){
        let finalMainBalance = mainBalance - donatedBalance;
        let finalCardBalance = donatedBalance + cardBalance;
        document.getElementById('tranjiction').innerText = donatedBalance; 
        document.getElementById('cardBalance').innerText = finalCardBalance;
        document.getElementById('mBalance').innerText = finalMainBalance;
        my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation amount');
    }
    document.getElementById('dBalance').value = ''
}
//////////////////////////// card 2 ////
function donatedBtnIdTwo (donatedBtnId){
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    let dBalance = document.getElementById('dBalanceTwo').value;
    let donatedBalance = Number(dBalance);
    let cBalance = document.getElementById('cardBalanceTwo').innerText;
    let cardBalance = Number(cBalance);
    
    if(donatedBalance > 0 ){
        let finalMainBalance = mainBalance - donatedBalance;
        let finalCardBalance = donatedBalance + cardBalance;
        document.getElementById('tranjiction2').innerText = donatedBalance; 
        document.getElementById('cardBalanceTwo').innerText = finalCardBalance;
        document.getElementById('mBalance').innerText = finalMainBalance;
        my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation amount');
    }
    document.getElementById('dBalanceTwo').value = ''
}
////////////////////////// card 3 //////
function donatedBtnIdThree (donatedBtnId){
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    let dBalance = document.getElementById('dBalanceThree').value;
    let donatedBalance = Number(dBalance);
    let cBalance = document.getElementById('cardBalanceThree').innerText;
    let cardBalance = Number(cBalance);
    
    if(donatedBalance > 0 ){
        let finalMainBalance = mainBalance - donatedBalance;
        let finalCardBalance = donatedBalance + cardBalance;
        document.getElementById('tranjiction3').innerText = donatedBalance; 
        document.getElementById('cardBalanceThree').innerText = finalCardBalance;
        document.getElementById('mBalance').innerText = finalMainBalance;
        my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation amount');
    }
    document.getElementById('dBalanceThree').value = ''
}

