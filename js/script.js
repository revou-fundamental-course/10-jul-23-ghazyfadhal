//menghitung BMI

//tinggi badan dibagi 100 agar menjadi angka desimal
// cth -> 150 / 100 = 1.5
function konversitb(x) {
    return x / 100;
  }
  
function hitungBMI() {
    var beratBadan = parseInt(document.getElementById('berat').value);
    var tinggiBadan = parseInt(document.getElementById('tinggi').value);
    
    var tb2 = konversitb(tinggiBadan);
    var hasil = beratBadan / (tb2 * tb2);
    
    document.getElementById('hasil').innerHTML = hasil.toFixed(1);
    document.getElementById('konten1').style.display = "none";
    document.getElementById("konten2").style.display = "block";
    
    if (hasil >= 18.5 && hasil <= 24.9) {

      document.getElementById('status').innerHTML = 'Anda memiliki berat badan Normal (ideal)';
      document.getElementById('ket').innerHTML = 'Berat badan Normal';
      document.getElementById('ket2').innerHTML = 'Anda berada dalam kategori normal.';
      document.getElementById('ket3').innerHTML = 'Kerja bagus, berat badan Anda sudah ideal.';
      document.getElementById('risk').innerHTML = 'Tidak ada resiko penyakit yang berasal dari tubuh ideal.';

    } else if (hasil <= 18.4) {

      document.getElementById('status').innerHTML = 'Anda Kekurangan berat badan';
      document.getElementById('ket').innerHTML = 'Berat badan Kurang';
      document.getElementById('ket2').innerHTML = 'Anda berada dalam kategori berat badan kurang.';
      document.getElementById('ket3').innerHTML = 'Cara terbaik untuk menaikkan berat badan adalah dengan menambah kalori pada makanan yang dikonsumsi dan berolahraga.';
      document.getElementById('risk').innerHTML = 'Beberapa resiko penyakit yang berasal dari tubuh Kekurangan berat badan';
      document.getElementById('li-risk').innerHTML = 'Kekurangan gizi';
      document.getElementById('li-risk2').innerHTML = 'Gangguan Pertumbuhan';
      document.getElementById('li-risk3').innerHTML = 'Turunnya fungsi kekebalan tubuh';
      document.getElementById('li-risk4').innerHTML = 'Gangguan kesuburan';
      document.getElementById('li-risk5').innerHTML = 'Memicu gejala Anemia';

    } else if (hasil >= 25.0 && hasil <= 29.9) {

      document.getElementById('status').innerHTML = 'Anda Kelebihan berat badan';
      document.getElementById('ket').innerHTML = 'Berat badan Lebih';
      document.getElementById('ket2').innerHTML = 'Anda berada dalam kategori overwight atau berat badan berlebih';
      document.getElementById('ket3').innerHTML = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
      document.getElementById('risk').innerHTML = 'Beberapa resiko penyakit yang berasal dari tubuh Kelebihan berat badan';
      document.getElementById('li-risk').innerHTML = 'Penyakit Jantung';
      document.getElementById('li-risk2').innerHTML = 'Stroke';
      document.getElementById('li-risk3').innerHTML = 'Masalah Pencernaan';
      document.getElementById('li-risk4').innerHTML = 'Sleep Apena';
      document.getElementById('li-risk5').innerHTML = 'Osteoartritis';
    
    } else if (hasil >= 30.0) {

      document.getElementById('status').innerHTML = 'Anda mengalami Kegemukan (Obesitas)';
      document.getElementById('ket').innerHTML = 'Overweight';
      document.getElementById('ket2').innerHTML = 'Anda berada dalam kategori overwight atau berat badan berlebih';
      document.getElementById('ket3').innerHTML = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
      document.getElementById('risk').innerHTML = 'Beberapa resiko penyakit yang berasal dari tubuh Kegemukan (Obesitas)';
      document.getElementById('li-risk').innerHTML = 'Penyakit Jantung';
      document.getElementById('li-risk2').innerHTML = 'Stroke';
      document.getElementById('li-risk3').innerHTML = 'Masalah Pencernaan';
      document.getElementById('li-risk4').innerHTML = 'Sleep Apena';
      document.getElementById('li-risk5').innerHTML = 'Osteoartritis';

    }
}
function reset() {
    document.getElementById("konten1").style.display = "block";
    document.getElementById("konten2").style.display = "none";
  }
