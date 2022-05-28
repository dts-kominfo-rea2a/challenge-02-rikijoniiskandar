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
  for (let i = 1; i <= dataYangAkanDilooping.length; i++) {
    const namaLengkap = dataYangAkanDilooping;

    namaLengkap.forEach(data => {
      hasilLooping.push(data.namaDepan + ' ' + data.namaBelakang)
    })
    if ([i === namaLengkap.length]) {
      break
    }
  }

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;
  for (let i = 1; i <= dataYangAkanDilooping.length; i++) {
    const totalPegawai = dataYangAkanDilooping;
    const jenisKelamin = []
    totalPegawai.forEach(data => {
      if (data.jenisKelamin === 'M') {
        jenisKelamin.push(data.jenisKelamin)
      }
      jumlahPria = jenisKelamin.length
    })
    if ([i === totalPegawai.length]) {
      break
    }
  }

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;
  for (let i = 1; i <= dataYangAkanDilooping.length; i++) {
    const totalPegawai = dataYangAkanDilooping;
    const jenisKelamin = []
    totalPegawai.forEach(data => {
      if (data.jenisKelamin === 'F') {
        jenisKelamin.push(data.jenisKelamin)
      }
      jumlahWanita = jenisKelamin.length
    })
    if ([i === totalPegawai.length]) {
      break
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
  let komentar = "haha";
  for (let i = 1; i < dataYangAkanDilooping.length; i++) {
    const pegawai = dataYangAkanDilooping;
    const pria = []
    const wanita = []
    pegawai.forEach(data => {
      if (data.jenisKelamin === 'M') {
        pria.push(data.jenisKelamin)
      } else {
        wanita.push(data.jenisKelamin)
      }
    })
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

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
