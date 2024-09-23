function btn (id){
    document.getElementById('donationBtn').classList.add('hidden');
    document.getElementById('historyBtn').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}