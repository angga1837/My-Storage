//validasi form
function validateform() {
    const name = document.forms["form-pesan"]["nama-panjang"].value;
    const Adress = document.forms["form-pesan"]["Alamat-Email"].value;

    if (name == "" || Adress == ""){
        alert("Tidak boleh kosong bang");
        return false;
    }

    setSenderUI(name, Adress, gender, messages);

    return false;
}

/*function setSenderUI(name, birthdate, gender, messages){
    document.getElementById("sender-nama-panjang").innerHTML = name;
    document.getElementById("sender-Tanggal-Lahir").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-pesan").innerHTML = messages;
}*/

//banner auto slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex+=n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('Slideku');
    if (n > x.length) slideIndex=1;

    else if (n < 1)  
        slideIndex = x.length; //kalau n<1 maka slide index menjadi banyak slide dari var x 
    for (i = 0; i <x.length; i++) {
        x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block'; //memunculkan slide ke index-1, jadi misal foto pertama indexnya 0, jadi slideindex yang nilainya 1 - 1 =0
}

setInterval(() => {
    plusDivs(1);
}, 2000); //setiap 2000 milisecond(atau 2 detik) mengganti gambar