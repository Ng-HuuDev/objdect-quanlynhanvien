// tao ham renderDSNV

function renderDSNV(dsnv, NV) {
  var contentHtml = "";
  for (var index = 0; index < dsnv.length; index++) {
    NV = dsnv[index];
    var trString = `
      <tr>
      <td> ${NV.tk}</td>
      <td> ${NV.ten}</td>
      <td> ${NV.email}</td>
      <td> ${NV.ngayLam}</td>
      <td> ${NV.chucVu}</td>
      <td> 0</td>
      <td> 0</td>
      <td> 
      <button  onclick=xoaNV("${NV.tk}")  class ="btn btn-success"> Xóa </button>
      <button onclick=suaNV("${NV.tk}") class= "btn btn-danger"> Sửa </button>
      </td>
      </tr>
      `;

    contentHtml += trString;
  }
  // duyet mang = forEach
  // DSNV.forEach(function (nv, index) {
  //     nv = dsnv[index];
  //     var trString = `
  //     <tr>
  //     <td> ${nv.tk}</td>
  //     <td> ${nv.ten}</td>
  //     <td> ${nv.email}</td>
  //     <td> ${nv.ngayLam}</td>
  //     <td> ${nv.chucVu}</td>
  //     <td> 0</td>
  //     <td> 0</td>
  //     </tr>
  //     `;
  //     contentHtml += trString;
  //   });

  document.getElementById("tableDanhSach").innerHTML = contentHtml;
}

// viet ham hienThiThongTin

function hienThiThongTin(nv) {
  document.getElementById("tknv").value = nv.tk;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCB;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.giolam;
}

// ham hien thi popup

function showModal(nv) {
  $("#myModal #tknv").val(nv["tk"]);
  $("#myModal #tknv").attr("readonly", true);
  $("#myModal #name").val(nv["name"]);
  $("#myModal #email").val(nv["email"]);
  $("#myModal #datepicker").val(nv["ngayLam"]);
  $("#myModal #luongCB").val(nv["luongCb"]);
  $("#myModal #chucvu").val(nv["chucVu"]);
  $("#myModal #gioLam").val(nv["gioLam"]);

  $("#myModal").modal("show");
}
