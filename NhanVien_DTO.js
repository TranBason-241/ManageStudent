var nhanVien = function() {
    this.tenNhanVien = "";
    this.maNhanVien = "";
    this.chucVu = "";
    this.luongCoban = "";
    this.gioLamTrongThang = "";
    this.soThuTu = "";

    this.tongLuong = function() {
        if (this.chucVu === "Giám đốc") {
            return this.luongCoBan * 3;

        } else if (this.chucVu === "Nhân Viên") {
            return this.luongCoBan;
        } else if (this.chucVu === "Quản lý") {

            return this.luongCoBan * 2;
        }
    }

    this.xepLoai = function() {
        if (Number(this.gioLamTrongThang) > 120) {
            return "Xuất Sắc"
        } else if (Number(this.gioLamTrongThang) > 100) {
            return "Giỏi";
        } else if (Number(this.gioLamTrongThang) > 80) {
            return "Khá";
        } else if (Number(this.gioLamTrongThang) > 50) {
            return "Trung Bình";
        }
    }

}