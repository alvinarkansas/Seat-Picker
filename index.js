var pickedSeat = [];

function removeHashtag(array) {
    let seatNumWithoutHashtag = [];
    let transit = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array[i].length; j++) {
            transit += array[i][j];
        }
        seatNumWithoutHashtag.push(transit);
        transit = '';
    }
    return seatNumWithoutHashtag
}

function sortSeatNum(array) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j] > array[j+1]) {
                let transit = array[j];
                array[j] = array[j+1];
                array[j+1] = transit;
            }
        }
    }
    return array;
}
console.log(sortSeatNum(['E2', 'C5', 'C2']));

function choose(num) {
    let seat = document.querySelector(num)
    //mendapatkan properti warna dari seat-------
    var style=window.getComputedStyle(seat,"");
    var bgColor=style.getPropertyValue("background-color");
    //-------------------------------------------
    if (bgColor == 'rgb(255, 255, 255)' || bgColor == 'rgb(163, 2, 2)') {
        seat.style.backgroundColor = "red";
        //simpan id di array-------------------------
        pickedSeat.push(num);
        console.log(pickedSeat);
    } else {
        seat.style.backgroundColor = "white";
        //hapus id di array--------------------------
        var numIndex = pickedSeat.indexOf(num)
        pickedSeat.splice(numIndex, 1);
        console.log(pickedSeat);
    }

}


function makeRow(namaRow, jumlahKursi) {
    for (let i = 1; i <= jumlahKursi; i++) {
        let newSeat = document.createElement("div")
        newSeat.className = 'seat';
        newSeat.id = `${namaRow}${i}`;
        var att = document.createAttribute("onclick");
        att.value = `choose("#${namaRow}${i}")`;
        newSeat.setAttributeNode(att);
        
        document.querySelector(`.row${namaRow}`).appendChild(newSeat);
    }
}
makeRow('A', 14,);
makeRow('B', 14,);
makeRow('C', 14,);
makeRow('D', 14,);
makeRow('E', 14,);
makeRow('F', 10,);
makeRow('G', 10,);
makeRow('H', 10,);

function ticketOn() {
    document.querySelector('#overlay').style.display = 'block';
}
function ticketOff() {
    document.querySelector('#overlay').style.display = 'none';
}
function addSeatNumToTicket(array) {
    document.querySelector(".seatNumberFinal").innerHTML = array;
}