export class NguoiKhaiBao {
    ten = "";
    ho = "";
    email = "";
    soDienThoai = "";
    ngay = "";
    thang = "";
    nam = "";
    diaChi = "";
    thongTinDiChuyen = "";
    loaiNhiem = "";
    hienThiThongTin = () => {
        return `
        <tbody>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Tên</td>
            <td>${this.ten}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Họ</td>
            <td>${this.ho}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Email</td>
            <td>${this.email}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Số điện thoại</td>
            <td>${this.soDienThoai}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Ngày</td>
            <td>${this.ngay}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Tháng</td>
            <td>${this.thang}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Năm</td>
            <td>${this.nam}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Địa chỉ</td>
            <td>${this.diaChi}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Thông tin di chuyển</td>
            <td>${this.thongTinDiChuyen}</td>
        </tr>
        <tr>
            <td style="padding: 0.5rem 2rem 0.5rem 0">Loại nhiễm</td>
            <td>${this.loaiNhiem}</td>
        </tr>
        </tbody>`;
    };
}
