//object

const siswa1 = {
}

const siswa2 = {
}

const siswa3 = { 
}

const siswa4 = {
}

const siswa5 = {
}

const daftarSiswa = [
    {
    nama: "Rosa",
    jenKel: "P",
    umur: "17",
    wFavorit: "kuning",
    seragam: ["osis", "identitas", "wearpack", "pramuka", "olahraga"]
    },
    {
    nama: "Ambar",
    jenKel: "L",
    umur: "16",
    wFavorit: "merah",
    seragam: ["osis", "identitas", "wearpack", "pramuka", "olahraga"]
    },
    {
    nama: "Rizki",
    jenKel: "P",
    umur: "16",
    wFavorit: "ungu",
    seragam: ["osis", "identitas", "wearpack", "pramuka", "olahraga"]
    },
    {
    nama: "Mila",
    jenKel: "P",
    umur: "15",
    wFavorit: "biru",
    seragam: ["osis", "identitas", "wearpack", "pramuka", "olahraga"]
    },
    {
    nama: "Bagas",
    jenKel: "L",
    umur: "18",
    wFavorit: "coklat",
    seragam: ["osis", "identitas", "wearpack", "pramuka", "olahraga"]
    }

]

    let mode = 'tambah'

//create, read, update, delete


// arrow function


const tampilkanSiswa = () => {

    const tblSiswa = document.getElementById("tblSiswa")
    tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Umur</th><th>Warna Favorit</th><th>Hapus</th><th>Edit</th></tr>`

for (let x in daftarSiswa) {
    console.log (`${parseInt(x) + 1}. ${daftarSiswa[x].nama} dengan jenis kelamin ${daftarSiswa[x].jenKel} umur ${daftarSiswa[x].umur} suka warna ${daftarSiswa[x].wFavorit}`)

    //mengakses dom 
    const tblSiswa = document.getElementById("tblSiswa")
    tblSiswa.innerHTML += `<tr> <th>${parseInt(x) + 1}</th> <td>${daftarSiswa[x].nama}</td> <td>${daftarSiswa[x].jenKel}</td> <td>${daftarSiswa[x].umur}</td> <td>${daftarSiswa[x].wFavorit}</td> <td><button class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[x].nama}')">Hapus</button></td> <td><button class="btn btn-warning" onclick="editSiswa('${daftarSiswa[x].nama}')">Edit</button></td></tr>`
}
}

const tambahSiswa = () => {
    const nama = document.getElementById('nama').value 
    const jenKel = document.getElementById('jenkel').value 
    const umur = document.getElementById('umur').value 
    const wFavorit = document.getElementById('wfavorit').value

    const siswaBaru = {
    nama: nama,
    jenKel: jenKel,
    umur: umur,
    wFavorit: wFavorit,
    seragam: ["osis", "identitas", "wearpack", "pramuka", "olahraga"]
    }
                                                                             
    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    }
    else {
        daftarSiswa[0] = siswaBaru
    }

    document.getElementById('nama').value = ""
    document.getElementById('jenkel').value = ""
    document.getElementById('umur').value = ""
    document.getElementById('wfavorit').value = ""

    mode = 'tambah'

    tampilkanSiswa()
}

const cariIndex = (nama) => {
    //tampilkan index jika nama siswa === nama
    for (let i=0; i<daftarSiswa.length; i++){
        if (daftarSiswa[i].nama == nama){
            return i
        }
}
}

const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target)
    //menghapus element dari dalam array
    daftarSiswa.splice(indexDihapus,1)

tampilkanSiswa()

    }


const editSiswa = (target) => {
    const indexEdit = cariIndex(target)

    console.log(target)
    console.log(indexEdit)
    console.log(daftarSiswa[indexEdit])

    const siswaDiedit = daftarSiswa[indexEdit];

    document.getElementById('nama').value = siswaDiedit.nama;
    document.getElementById('jenkel').value = siswaDiedit.jenKel;
    document.getElementById('umur').value = siswaDiedit.umur;
    document.getElementById('wfavorit').value = siswaDiedit.wFavorit

mode = indexEdit
    
}

const cancel = (target) => {
    document.getElementById('nama').value = ""
    document.getElementById('jenkel').value = ""
    document.getElementById('umur').value = ""
    document.getElementById('wfavorit').value =""

    mode = 'tambah'
}