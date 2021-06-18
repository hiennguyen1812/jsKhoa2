function Dong_ho(){
    let gio = document.getElementById("gio-id")
    let phut = document.getElementById("phut-id")
    let giay = document.getElementById("giay-id")
    let Gio_hien_tai = new Date().getHours();
    let Phut_hien_tai = new Date().getMinutes();
    let Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
let Dem_gio = setInterval(Dong_ho,1000)