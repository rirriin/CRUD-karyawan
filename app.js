const nama = [
    "Devyn Ramirez",
    "Harmony Duncan",
    "Clarissa Burgess",   
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase", 
    "Kristin Mcdaniel",
    "Macey Sanford",
    "Alfredo Faulkner",
 ]

const masaKerja = [
    10,
    5,
    8,
    7,
    4,
    10,
    9,
    8,
    7,
    10
]

const karyawanJunior = []
const karyawanSenior = []

for ( let i=0; i < nama.length; i++) {
    // mencari masa kerja
    if (masaKerja[i] < 6){
    // jika ketemu
        karyawanJunior.push (nama[i])
    // jika tidak ketemu
    }
    else { karyawanSenior.push (nama[i])

    }
}
console.log ('Daftar Karyawan Senior:')
for ( let index in karyawanSenior)
console.log (`${parseInt(index)+1}. ${karyawanSenior[index]}`)

let index = 1
console.log ('Daftar Karyawan Junior:')
for ( const nama of karyawanJunior){
console.log (`${index}. ${nama}`);
index++;
}

for ( let i=0; i < nama.length; i++) {
    // mencari masa kerja
    if (masaKerja[i] < 6){
    // jika ketemu
        karyawanJunior.push (nama[i])
        console.log (`karyawan ${nama[i]} mendapatkan gaji Rp4.000.000`)
    // jika tidak ketemu
    }
    else { karyawanSenior.push (nama[i])
        console.log (`karyawan ${nama[i]} mendapatkan gaji Rp 7.000.000`)

    }
}

function golonganKaryawan (){
    const karyawanJunior = []
    const karyawanSenior = [] 
}

function tampilkanGaji(){
    for ( let i=0; i < nama.length; i++) {
        // mencari masa kerja
        if (masaKerja[i] < 6){
        // jika ketemu
            karyawanJunior.push (nama[i])
            console.log (`karyawan ${nama[i]} mendapatkan gaji Rp4.000.000`)
        // jika tidak ketemu
        }
        else { karyawanSenior.push (nama[i])
            console.log (`karyawan ${nama[i]} mendapatkan gaji Rp 7.000.000`)
    
        }
    }
}
tampilkanGaji()

console.log(``)
