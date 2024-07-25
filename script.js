//Hàm để tính điểm trung bình
function tinhdiemtrungbinh(diemtoan, diemly, diemhoa) {
    return (diemtoan + diemly + diemhoa) / 3;
}       
        //var hocsinhxuatsac = 40; // 4 môn đạt 10 điểm
        //var hocsinhgioi = 32;   // 4 môn đạt 8 điểm
        //var hocsinhkha = 24;    // 4 môn đạt 6 điểm
        //var hocsinhyeukem = 16; // 4 môn đạt 4 điểm

// Hàm để xếp loại học sinh dựa trên điểm trung bình
function xeploai(diemtrungbinh) {
    if (diemtrungbinh >= 8.5) {
        return 'Bạn đạt được học sinh xuất sắc';
    } else if(diemtrungbinh >= 8.5) {
        return 'Bạn đạt được học sinh giỏi';
    } else if(diemtrungbinh >= 8.5) {
        return 'Bạn đạt được học sinh khá';
    } else if(diemtrungbinh >= 8.5) {
        return 'Bạn đạt được học sinh trung bình';
    } else {
        return 'Bạn đạt được học sinh yếu';
    }
}

//Hàm để xử lý khi người dùng nhấn nút "Xếp loại"
function xeploaihocsinh() {
    //Lấy giá trị từ các ô nhập liệu 
    const diemtoan = parseFloat(document.getElementById('diemtoan').value);
    const diemly = parseFloat(document.getElementById('diemly').value);
    const diemhoa = parseFloat(document.getElementById('diemhoa').value);

    //Tính điểm trung bình
    const diemtrungbinh = tinhdiemtrungbinh(diemtoan, diemly, diemhoa);

    //Xếp loại học sinh
    const xeploaihocsinh = xeploai(diemtrungbinh);

    //Hiển thị kết quả
    //document.getElementById('result').innerText = 'Điểm trung bình: ${diemtrungbinh}\nXếp loại: ${xeploaihocsinh}';
}