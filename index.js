var DOMID = function(id) {
    return document.getElementById(id).value;
}

var arr = [];
var idNhanVien = 0;
document.getElementById("btn-success").onclick = function() {

    var nv = new nhanVien();
    nv.maNhanVien = DOMID("maNhanVien");
    nv.tenNhanVien = DOMID("tenNhanVien");
    nv.chucVu = DOMID("chucVu");
    nv.luongCoBan = DOMID("luongCoBan");
    nv.gioLamTrongThang = DOMID("gioTrongThang");

    arr.push(nv);
    loadTable();

}

var loadTable = function() {
    var body = "";

    for (i = 0; i < arr.length; i++) {
        var idKey = 0;
        arr[i].soThuTu = idKey;
        body += `<tr>
        <td name="idd">${arr[i].maNhanVien}</td>
        <td>${arr[i].tenNhanVien}</td>
        <td>${arr[i].chucVu}</td>
        <td>${arr[i].luongCoBan}</td>
        <td>${arr[i].tongLuong()}</td>
        <td>${arr[i].gioLamTrongThang}
        <td>${arr[i].xepLoai()} <button class=" btn btn-danger" id="btn-delete" onclick="myFunction(this,${idKey})">Xóa</button></td>
        </tr>`
        document.getElementById("tableNhanVien").innerHTML = body;
    }
}

function myFunction(element, id) {
    document.getElementById("tableNhanVien").removeChild(element.parentElement.parentElement);

    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i].soThuTu) === Number(id)) {
            arr.pop(id);
            console.log(arr);
            loadTable();
            return;
        }

    }
}