let diemSinh;
let diemLi;
let diemHoa;
diemSinh = prompt('Mời bạn nhập điểm sinh: ');
diemLi = prompt('Mời bạn nhập điểm Lí: ');
diemHoa = prompt('Mời bạn nhập điểm Hóa: ');
diemSinh = parseInt(diemSinh);
diemLi = parseInt(diemLi);
diemHoa = parseInt(diemHoa);
let trungBinh = (diemSinh + diemLi + diemHoa)/3;
let tongDiem = diemSinh + diemLi + diemHoa;
alert('Điểm trung bình là: '+trungBinh);
alert('Điểm tổng là: '+tongDiem);

