document.getElementById("hitung").addEventListener("click", function() {
  let alas = parseFloat(document.getElementById("alas").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);
  
  // Validasi input
  if (alas > 0 && tinggi > 0){
    let Luas = 1/2 * alas * tinggi;
    document.getElementById('proses').innerHTML = `
        Luas = 1/2 x Alas x Tinggi <br>
        Luas = 1/2 x ${alas} x ${tinggi} <br>
        Luas = 0.5 x ${alas} x ${tinggi} <br>
        Luas = ${Luas}`
  }else{
    document.getElementById('Luas').innerText = "Mohon masukan angka yang valid";
  }
});

document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("Luas").innerText = "";
  document.getElementById("proses").innerHTML = "";
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
});
