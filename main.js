// Bài toán chính 1
const A = 2;
const B = 1;
const C = 0.5;
const khuvuc_1 = 2.5;
const khuvuc_2 = 1.5;
const khuvuc_3 = 1;

function bonusArea(diemKhuVuc) {
  var diemKV = 0;

  if (diemKhuVuc === "A") {
    diemKV = 2.5;
  } else if (diemKhuVuc === "B") {
    diemKV = 1.5;
  } else if (diemKhuVuc === "C") {
    diemKV = 1;
  }

  return diemKV;
}
function bonusSubject(diemDoiTuong) {
  var diemDT = 0;
  if (diemDoiTuong === "1") {
    diemDT = 2;
  } else if (diemDoiTuong === "2") {
    diemDT = 1;
  } else if (diemDoiTuong === "3") {
    diemDT = 0.5;
  }
  return diemDT;
}

document.getElementById("kiemTra").onclick = function () {
  var diemKhuVuc = document.getElementById("khuVuc").value;
  var diemDoiTuong = document.getElementById("doiTuong").value;
  var diemThuNhat = document.getElementById("diemMon1").value * 1;
  var diemThuHai = document.getElementById("diemMon2").value * 1;
  var diemThuBa = document.getElementById("diemMon3").value * 1;

  // if (diemThuNhat === 0) {
  //   console.log("Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0");
  // } else if (diemThuHai === 0) {
  //   console.log("Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0");
  // } else if (diemThuBa === 0) {
  //   console.log("Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0");
  // }

  if (diemThuNhat === 0 || diemThuHai === 0 || diemThuBa === 0) {
    console.log("Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0");
  }
  var diemKV = bonusArea(diemKhuVuc);

  var diemDT = bonusSubject(diemDoiTuong);

  var diemUutien = diemKV + diemDT;
  console.log(diemUutien);

  var diemTongKet = diemThuNhat + diemThuHai + diemThuBa + diemUutien;
  var result = "Bạn đã đậu." + "Tổng điểm của bạn là: " + diemTongKet;
  document.getElementById("footerkiemTra").innerHTML = result;
};

// Bài toán chính 2
const KW_Dau = 500;
const KW_2 = 650;
const KW_3 = 850;
const KW_4 = 1100;
const KW_5 = 1300;

document.getElementById("kiemTraTienDien").onclick = function () {
  var tenKH = document.getElementById("ten").value;
  var soKw = document.getElementById("soKW").value * 1;

  //var soKw = 0;
  //var tong = 0;
  if (soKw <= 50) {
    tienDienDau = soKw * KW_Dau;
    tong = soKw * tienDienDau;
  } else if (soKw > 50 && soKw <= 100) {
    tienDienDau = 50 * KW_Dau;
    tienKM2 = (soKw - 50) * KW_2;
    tong = tienDienDau + tienKM2;
  } else if (soKw > 100 && soKw <= 200) {
    //=500 + (100-50)*650 + (soKw-100)*850
    tienDienDau = 50 * KW_Dau;
    tienKM2 = (100 - 50) * KW_2;
    tienKM3 = (soKw - 100) * KW_3;
    tong = tienDienDau + tienKM2 + tienKM3;
  } else if (soKw > 200 && soKw <= 350) {
    //=500 + (100-50)*650 + (200-100)*850 + (soKw-200)*1100
    tienDienDau = 50 * KW_Dau;
    tienKW2 = (100 - 50) * KW_2;
    tienKW3 = (200 - 100) * KW_3;
    tienKW4 = (soKw - 200) * KW_4;
    tong = tienDienDau + tienKW2 + tienKW3 + tienKW4;
  } else if (soKw > 350) {
    //=500 + (100-50)*650 + (200-100)*850 + (350-200)*1100 + (soKw-350)*1300;
    tienDienDau = 50 * KW_Dau;
    tienKW2 = (100 - 50) * KW_2;
    tienKW3 = (200 - 100) * KW_3;
    tienKW4 = (350 - 200) * KW_4;
    tienKW5 = (soKw - 350) * KW_5;
    tong = tienDienDau + tienKW2 + tienKW3 + tienKW4 + tienKW5;
  }

  new Intl.NumberFormat("de-DE").format(tong);
  var result = "Họ tên: " + tenKH + ";" + "Tiền điện: " + tong;
  document.getElementById("footerTienDien").innerHTML = result;
};
