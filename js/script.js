document.getElementById("hitung").addEventListener("click", function () {
  let alas = parseFloat(document.getElementById("alas").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);

  if (alas > 0 && tinggi > 0) {
    let Luas = (1 / 2) * alas * tinggi;
    document.getElementById(
      "proses"
    ).innerHTML = `Luas = 1/2 x Alas x Tinggi <br>
        Luas = 1/2 x ${alas} x ${tinggi} <br>
        Luas = ${Luas}`;
  } else {
    document.getElementById("Luas").innerText =
      "Mohon masukan angka yang valid";
  }
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("Luas").innerText = "";
  document.getElementById("proses").innerHTML = "";
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
});

// Proses Hitung Keliling
document.getElementById("hitungKel").addEventListener("click", function () {
  let SisiA = parseFloat(document.getElementById("SisiA").value);
  let SisiB = parseFloat(document.getElementById("SisiB").value);
  let SisiC = parseFloat(document.getElementById("SisiC").value);

  if (SisiA > 0 && SisiB > 0 && SisiC > 0) {
    let Keliling = SisiA + SisiB + SisiC;
    document.getElementById(
      "prosesKel"
    ).innerHTML = `Keliling = Sisi A + Sisi B + Sisi C <br>
    Keliling = ${SisiA} + ${SisiB} + ${SisiC} <br>
    Keliling = ${Keliling}`;
  } else {
    document.getElementById("prosesKel").innerText =
      "Mohon masukkan angka yang valid";
  }
});

document.getElementById("resetKel").addEventListener("click", function () {
  document.getElementById("prosesKel").innerText = "";
  document.getElementById("SisiA").value = "";
  document.getElementById("SisiB").value = "";
  document.getElementById("SisiC").value = "";
});


document.getElementById('switch').addEventListener('click', function() {
  var switchToKeliling = document.getElementById('keliling-section');
  switchToKeliling.scrollIntoView({behavior: 'smooth'});

});