// time added part //
function timeDate(id){
    const date = new Date();
    const time = date.toLocaleString();
    document.getElementById(id).innerText = time ;
}

//  // // history for card 1
document.getElementById('btnCard').addEventListener('click', function(event){
    event.preventDefault();
    const historyCard = document.createElement('div');
    historyCard.innerHTML =`
    <div class="p-8 shadow-sm rounded-xl border space-y-3" >
           <p class="font-bold text-xl"><span id="tranjiction"> 0 </span> Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
            <p class="font-light">Date : <span id="timeNow1"></span> GMT +0600 (Bangladesh Standard Time)</p> 
    </div>`;
    let dBalance = document.getElementById('dBalance').value;
    let donatedBalance = Number(dBalance);
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    if (donatedBalance > 0 && donatedBalance <= mainBalance) {
        document.getElementById('cardontainer').appendChild(historyCard);
    }
    timeDate('timeNow1');
})
// // // history for card 2
document.getElementById('btnCardTwo').addEventListener('click', function(event){
    event.preventDefault();
    const historyCard = document.createElement('div');
    historyCard.innerHTML =`
    <div class="p-8 shadow-sm rounded-xl border space-y-3" >
           <p class="font-bold text-xl"><span id="tranjiction2"> 0 </span> Taka is Donated for Flood Relief in Feni, Bangladesh</p>
            <p class="font-light">Date : <span id="timeNow2"></span> GMT +0600 (Bangladesh Standard Time)</p> 
    </div>`;
    let dBalance = document.getElementById('dBalanceTwo').value;
    let donatedBalance = Number(dBalance);
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    if (donatedBalance > 0 && donatedBalance <= mainBalance) {
        document.getElementById('cardontainer2').appendChild(historyCard);
    }
    timeDate('timeNow2');
})
// // // history for card 3
document.getElementById('btnCardThree').addEventListener('click', function(event){
    event.preventDefault();
    const historyCard = document.createElement('div');
    historyCard.innerHTML =`
    <div class="p-8 shadow-sm rounded-xl border space-y-3" >
          <p class="font-bold text-xl"><span id="tranjiction3"> 0 </span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p class="font-light">Date : <span id="timeNow3"></span> GMT +0600 (Bangladesh Standard Time)</p>  
    </div>`;
    let dBalance = document.getElementById('dBalanceThree').value;
    let donatedBalance = Number(dBalance);
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    if (donatedBalance > 0 && donatedBalance <= mainBalance) {
        document.getElementById('cardontainer3').appendChild(historyCard);
    }
    timeDate('timeNow3');
})
