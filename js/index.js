// tao mang chua DSNV

var DSNV = [];

// them nv

function themnv() {
  // nhap thong tin nguoi dung
  // tao object
  //  push nv
  // render ra dsnv
  var tk = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var giolam = document.getElementById("gioLam").value;

  // tao object
  var nv = {
    tk,
    ten,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    giolam,
    // tinhLuong: function () {
    //   var tongLuong = 0;
    // },
  };
  // push nv
  DSNV.push(nv);

  // render DSNV

  renderDSNV(DSNV);
}

// xoa nv
function xoaNV(id) {
  // tim vi tri- index cua nhan can xoa => findIdex
  var index = DSNV.findIndex(function (item) {
    return item.tk == id;
  });

  // su dung splice(vitri, so luong xoa)
  DSNV.splice(index, 1);

  // cap nhat layout sau khi xoa
  renderDSNV(DSNV);
}

// sua Sv

function suaNV(id) {
  // tim vi tri- index cua nhan can xoa => findIdex
  var index = DSNV.findIndex(function (item) {
    return item.tk == id;
  });
  // hienThiThongTin(nv);
  var nv = DSNV[index];
  showModal(nv);
}
