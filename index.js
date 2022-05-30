// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];
  for (let i = 0; i <= dataYangAkanDilooping.length; i++) {
    const profil = dataYangAkanDilooping[i];
    if(profil !== undefined ){
      const namaDepan = profil.namaDepan
      const namaBelakang = profil.namaBelakang
      hasilLooping.push(namaDepan + ' ' + namaBelakang)
    }
  }

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;
  let totalPria = []
  for (let i = 0; i <= dataYangAkanDilooping.length; i++) {
    const profil = dataYangAkanDilooping[i];
    if(profil !== undefined) {
     let jenisKelamin = profil.jenisKelamin
     if(jenisKelamin === 'M'){
       totalPria.push(jenisKelamin)
     }
     jumlahPria = totalPria.length
    }
   
  }

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;
  let totalWanita = []
  for (let i = 0; i <= dataYangAkanDilooping.length; i++) {
    const profil = dataYangAkanDilooping[i];    
    if( profil !== undefined){
      let jenisKelamin = profil.jenisKelamin
      if (jenisKelamin === 'F'){
        totalWanita.push(jenisKelamin)
      }
      jumlahWanita = totalWanita.length
    }
  }

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = "";
  const pria = []
  const wanita = []
  for (let i = 0; i <= dataYangAkanDilooping.length; i++) {
    const pegawai = dataYangAkanDilooping[i];
    if ( pegawai !== undefined ) {
      let jenisKelamin = pegawai.jenisKelamin
      if( jenisKelamin === 'M'){
        pria.push(jenisKelamin)
      } else {
        wanita.push(jenisKelamin)
      }
    }
    if (pria.length > wanita.length) {
      komentar = "Jumlah Pria lebih banyak dari Wanita"
    } else if (wanita.length > pria.length) {
      komentar = "Jumlah Wanita lebih banyak dari Pria"
    } else {
      komentar = "Jumlah Pria dan Wanita berimbang"
    }
  }

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
