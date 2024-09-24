function timeDate1(){
    const date = new Date();
    const time = date.toLocaleString();
    let dBalance = document.getElementById('dBalance').value;
    let donatedBalance = Number(dBalance);
    if(donatedBalance > 0 ){
        document.getElementById('timeNow1').innerText = time ;
    }
}
function timeDate2(){
    const date = new Date();
    const time = date.toLocaleString();
    let dBalance = document.getElementById('dBalanceTwo').value;
    let donatedBalance = Number(dBalance);
    if(donatedBalance > 0 ){
        document.getElementById('timeNow2').innerText = time ;
    }
}
function timeDate3(timeId){
    const date = new Date();
    const time = date.toLocaleString();
    let dBalance = document.getElementById('dBalanceThree').value;
    let donatedBalance = Number(dBalance);
    if(donatedBalance > 0 ){
        document.getElementById('timeNow3').innerText = time ;
    }
}