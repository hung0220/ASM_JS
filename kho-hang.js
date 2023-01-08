function initData() {
    let sanPham = [{ "ten": "Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/04/45153-59499-large_mobile/vinamilk-optimum-gold-4-900g.jpg", "gia": "700" }, { "ten": "Combo 2 lon Sữa Nan Organic  Organic Organic      3 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/11/44613-69139-large_mobile/combo-2-nestle-nan-organic-3-2-6-tuoi-900g.jpg", "gia": "800" }, { "ten": "Combo 2 gói Bỉm tã quần Huggies  size 58 miếng (6-11kg)", "hinhAnh": "https://cdn.concung.com/2020/11/49452-68964-large_mobile/combo-2-goi-ta-quan-sieu-cao-cap-huggies-platinum-nature-made-m-58-mieng.jpg", "gia": "900" }, { "ten": "Combo 2 lon Sữa Similac Eye-Q Similac Eye-Q số 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/09/45088-65917-large_mobile/combo-2-similac-iq-4-hmo-900g.jpg", "gia": "100" }, { "ten": "Bỉm tã dán Bobby siêu thấm size M 48 miếng 48 miếng(6-11kg)", "hinhAnh": "https://cdn.concung.com/2020/08/20472-64510-large_mobile/ta-dan-bobby-fresh-sieu-mong-m-6-11kg-48-mieng.jpg", "gia": "300" }, { "ten": "Combo 2 lon Sữa Similac Eye-Q Similac Eye-Q số 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/11/48127-68045-large_mobile/thuc-pham-bo-sung-aptakid-3-growing-up-milk-formula-2-tuoi-tro-len-900g.jpg", "gia": "200" }, { "ten": "Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/11/44613-69139-large_mobile/combo-2-nestle-nan-organic-3-2-6-tuoi-900g.jpg", "gia": "700" }, { "ten": "Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2021/02/48825-70754-large_mobile/thung-thuc-pham-bo-sung-sua-tiet-trung-similac-eye-q-180ml-loc-4-hop-moi-12-loc.jpg", "gia": "120" }, { "ten": "Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2021/04/44965-71683-large_mobile/chao-tuoi-baby-bo-dau-ha-lan-ca-rot-sg-food-10-thang-240g.jpg", "gia": "900" }, { "ten": "Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/11/44613-69139-large_mobile/combo-2-nestle-nan-organic-3-2-6-tuoi-900g.jpg", "gia": "150" }];

    let jsonSp = localStorage.getItem('san-pham1');
    if (jsonSp == null)
        localStorage.setItem('san-pham1', JSON.stringify(sanPham))
}

initData();
function initData2() {
    let sanPham1 = [{ "ten": "Giảm 30% khi mua combo 5 gói cháo tươi SG Food", "hinhAnh": "https://concung.com/img/promotion/2021/SGF.png", "gia": "1" }, { "ten": "Giảm 30% khi mua combo 5 gói cháo tươi SG Food", "hinhAnh": "https://concung.com/img/promotion/2021/SGF.png", "gia": "1" }, { "ten": "Tặng thú bông con sâu khi mua sữa Bellamy", "hinhAnh": "https://concung.com/img/promotion/2021/BELLAMY.png" }, { "ten": "Tặng Phiếu mua hàng thời trang, đồ chơi 200.000 ..", "hinhAnh": "https://concung.com/img/promotion/2021/0bc67c2835adc7f39ebc.jpg" }, { "ten": "Tặng đồ chơi bàn học lắp ghép khi mua tã Goon", "hinhAnh": "https://concung.com/img/promotion/2021/GOON.png" }, { "ten": "Tặng máy đo huyết áp, bình giữ nhiệt, thố 333", "hinhAnh": "https://concung.com/img/promotion/2021/KMLSUA04.jpg" }, { "ten": "Tặng ghế lười, balo đi sinh, ghế bầu khi mua Sim..", "hinhAnh": "https://concung.com/img/promotion/2021/KMLSUA07.jpg" }, { "ten": "Mua Abbott Grow tặng đồ chơi vận động", "hinhAnh": "https://concung.com/img/promotion/2021/KMLSUA05.jpg" }, { "ten": "Mua Abbott Grow tặng đồ chơi vận động", "hinhAnh": "https://concung.com/img/promotion/2021/KMLTA_Merries.png" }, { "ten": "Tặng thảm bông, bộ bàn lego khi mua tã Genki", "hinhAnh": "https://concung.com/img/promotion/2021/KMLTA_Genki.png" }];

    let jsonSp = localStorage.getItem('san-pham-khuyen-mai-lon');
    if (jsonSp == null)
        localStorage.setItem('san-pham-khuyen-mai-lon', JSON.stringify(sanPham1))
}
initData2();
function initData3() {
    let sanPham2 = [{ "ten": "Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)", "hinhAnh": "https://cdn.concung.com/2020/04/45153-59499-large_mobile/vinamilk-optimum-gold-4-900g.jpg", "gia": "999" }, { "ten": "Combo 2 Sữa Glico Icreo số 1 820g - Combo 2 lon (9-36 tháng)", "hinhAnh": "https://cdn.concung.com/2020/09/32890-64808-cat/glico-icreo-so-1-820g-combo-2-lon.jpg", "gia": "888" }, { "ten": "Thùng sữa dinh dưỡng pha sẵn Nestle NAN OPTIPRO Kid 180ml (Lốc 4) - 6..", "hinhAnh": "https://cdn.concung.com/2020/11/47251-69205-cat/thung-thuc-pham-bo-sung-nestle-nan-optipro-kid-180ml-loc-4-6-loc.jpg", "gia": "111" }, { "ten": "Sữa Glico Icreo số 0 800g - combo 2 lon  combo 2 lon (0-12 tháng)", "hinhAnh": "https://cdn.concung.com/2020/09/31082-64762-cat/sua-bot-glico-icreo-so-0-800g-combo-2-lon.jpg", "gia": "333" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn HG 200g", "hinhAnh": "https://cdn.concung.com/2019/07/41863-51433-cat/bot-an-dam-ridielac-gold-4-vi-man-hg-200g.jpg", "gia": "789" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn HG 200g", "hinhAnh": "https://cdn.concung.com/2019/10/37625-52715-cat/nestle-nan-al-110-0-3-tuoi-400g-new.jpg", "gia": "987" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g", "hinhAnh": "https://cdn.concung.com/2019/07/41864-51432-cat/ridielac-gold-3-vi-ngot-hg-200g.jpg", "gia": "123" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g", "hinhAnh": "https://cdn.concung.com/2019/07/41864-51432-cat/ridielac-gold-3-vi-ngot-hg-200g.jpg", "gia": "785" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g", "hinhAnh": "https://cdn.concung.com/2019/07/41864-51432-cat/ridielac-gold-3-vi-ngot-hg-200g.jpg", "gia": "950" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g", "hinhAnh": "https://cdn.concung.com/2019/09/43247-52461-cat/vi-2-num-ty-co-thuong-wesser-size.jpg", "gia": "450" }, { "ten": "Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g", "hinhAnh": "https://cdn.concung.com/2019/09/43247-52461-cat/vi-2-num-ty-co-thuong-wesser-size.jpg", "gia": "100" }, { "ten": "Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)", "hinhAnh": "https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg", "gia": "990" }, { "ten": "Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)", "hinhAnh": "https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg", "gia": "960" }, { "ten": "Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)", "hinhAnh": "https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg", "gia": "960" }, { "ten": "Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)", "hinhAnh": "https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg", "gia": "990" }];

    let jsonSp = localStorage.getItem('san-pham-danh-rieng-cho-bo-me');
    if (jsonSp == null)
        localStorage.setItem('san-pham-danh-rieng-cho-bo-me', JSON.stringify(sanPham2))
}
initData3();








/**---------------------------Deal Online mỗi ngày-------------------------------- */
function onclickDongYCapNhatSanPham() {

    console.log(`Click Cập Nhật sản phẩm cho vi tri ${viTriCanSua}`);

    let nodeSuaTen = document.getElementById("sua-ten-sp");
    let nodeSuahinAnh = document.getElementById("sua-hinh-anh-sp");
    let nodeSuaGia = document.getElementById("sua-gia-sp");

    let ten = nodeSuaTen.value;
    let hinhAnh = nodeSuahinAnh.value;
    let gia = nodeSuaGia.value;

    let spMoi = {
        ten: ten,
        hinhAnh: hinhAnh,
        gia: gia,
    }

    mangSP[viTriCanSua] = spMoi;
    hienThiDs(mangSP, "dssp");

    let mang = JSON.stringify(mangSP);
    localStorage.setItem("san-pham1", mang);


    let nodeSuaXanPham = document.getElementById("form-cap-nhat");
    nodeSuaXanPham.innerHTML = ` <style>
.container-form-cap-nhat-san-pham {
    display:none;
    
}

</style>`


}
function onclickThoatFormCapNhat() {

    let nodeThoatFormSanPham = document.getElementById("form-cap-nhat");
    nodeThoatFormSanPham.innerHTML = `
<style>
.container-form-cap-nhat-san-pham {
    display:none;
}

</style>
`

}
/**
 * 
 * @param {number} viTri 
 */
function onclickSuaSanPham(viTri) {
    viTriCanSua = viTri;
    let doiTuongCanSua = mangSP[viTri];

    console.log(doiTuongCanSua);



    console.log(`Vị trí cần sửa là ${viTriCanSua}`);
    let nodeSuaXanPham = document.getElementById("form-cap-nhat");
    nodeSuaXanPham.innerHTML = `


    <div class="container-form-cap-nhat-san-pham">
    <div class="form-cap-nhat-san-pham">
        <!-- Cập nhật sản phẩm -->
        <label for="sua-ten-sp">Tên sản phẩm</label>
        <input type="text" id="sua-ten-sp">

        <label for="sua-gia-sp">Giá sản phẩm</label>
        <input type="number" min="1" id="sua-gia-sp">

        <label for="sua-hinh-anh-sp">Link ảnh sản phẩm</label>
        <input type="text" id="sua-hinh-anh-sp">

        <button onclick="onclickDongYCapNhatSanPham()">Cập nhật sản phẩm</button>
        <button onclick="onclickThoatFormCapNhat()">Hủy</button>
    </div>
</div>
    

    `


    //3.  add thông tin mẫu lên bảng
    let nodeSuaTen = document.getElementById("sua-ten-sp");
    nodeSuaTen.value = doiTuongCanSua.ten;

    let nodeSuahinAnh = document.getElementById("sua-hinh-anh-sp");
    nodeSuahinAnh.value = doiTuongCanSua.hinhAnh;

    let nodeSuaGia = document.getElementById("sua-gia-sp");

    nodeSuaGia.value = doiTuongCanSua.gia;

}

function ClickThemSanPhamMoi() {

    let themSp = document.getElementById("form-cap-nhat");
    themSp.innerHTML = `
 
 
     <div class="container-form-cap-nhat-san-pham">
     <div class="form-cap-nhat-san-pham">
        
         <label for="hinh-anh-san-pham">Link ảnh sản phẩm</label>
         <input type="text" id="hinh-anh-san-pham">
         <label for="ten-sp">Tên sản phẩm</label>
         <input type="text" id="ten-sp">
 
         <label for="gia-sp">Giá sản phẩm</label>
         <input type="number" min="1" id="gia-sp">
 
       
 
         <button onclick="themSanPhamMoi()">Thêm Sản Phẩm</button>
         <button onclick="onclickThoatFormCapNhat()">Hủy</button>
     </div>
 </div>
     
 
     `


}
function themSanPhamMoi() {
    console.log(`Click Thêm sản phẩm `);

    let nodeSuaTen = document.getElementById("ten-sp");
    let nodeSuahinAnh = document.getElementById("hinh-anh-san-pham");
    let nodeSuaGia = document.getElementById("gia-sp");

    let ten1 = nodeSuaTen.value;
    let hinhAnh1 = nodeSuahinAnh.value;
    let gia1 = nodeSuaGia.value;

    if (hinhAnh1 == `` || gia1 == `` || ten1 == ``) {
        alert("Bạn thiếu rồi!!  Vui lòng nhập đầy đủ")
    } else {
        let spMoi = {
            ten: ten1,
            hinhAnh: hinhAnh1,
            gia: gia1,
        }

        mangSP.push(spMoi)
        hienThiDs(mangSP, "dssp");

        let mang = JSON.stringify(mangSP);
        localStorage.setItem("san-pham1", mang);

    }


}
let jsonDSSanPham = localStorage.getItem("san-pham1");
let mangSP = JSON.parse(jsonDSSanPham);

let viTriCanSua;

/**
 * 
 * @param {[]} mang 
 * @param {string} idNodes 
 */
function hienThiDs(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        
        <div class="san-pham">
        
                <div class="hinh-anh">
                    <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
                </div>
                <h2 class="ten"> ${mang[i].ten}</h2>
                <h2 class="gia"> ${mang[i].gia}</h2>
                
                <button onclick="onclickSuaSanPham(${i})">Sửa sản phẩm</button>
                <button onClick="xoaSanPham(${i});thongBaoXoa()">Xóa sản phẩm</button>
            </div>

        `
    }
}

hienThiDs(mangSP, "dssp");
hienThiDs(mangSP, "khuyen-mai-lon");

function thongBaoXoa() {
    alert("Đã Xóa Sản Phẩm ! ");
}
function xoaSanPham(viTri) {

    console.log(`Xóa sản phẩm tại vị trí ${viTri}`);
    mangSP.splice(viTri, 1);




    hienThiDs(mangSP, "dssp");

    let mang = JSON.stringify(mangSP);
    localStorage.setItem("san-pham1", mang);

}



function timKiem() {
    console.log("tìm kiem");
    let mangTimKiem = [];
    let nodeInputTimkiem = document.getElementById("tim-kiem-san-pham");

    let timKiem = nodeInputTimkiem.value;

    for (i = 0; i < mangSP.length; i++) {

        if (mangSP[i].ten.includes(timKiem)) {
            mangTimKiem.push(mangSP[i]);
        }
    }
    hienThiDs(mangTimKiem, "dssp");
}


function sapXepTangDan() {
    let mangTangDan = [];
    for (let i = 0; i < mangSP.length - 1; i++) {
        for (let j = i + 1; j < mangSP.length; j++) {
            if (mangSP[i].gia > mangSP[j].gia) {
                mangTangDan = mangSP[j];
                mangSP[j] = mangSP[i];
                mangSP[i] = mangTangDan;
                hienThiDs(mangSP, "dssp");
            }

        }
    }
}

function sapXepGiamDan() {
    let mangTangDan = [];
    for (let i = 0; i < mangSP.length - 1; i++) {
        for (let j = i + 1; j < mangSP.length; j++) {
            if (mangSP[i].gia < mangSP[j].gia) {
                mangTangDan = mangSP[j];
                mangSP[j] = mangSP[i];
                mangSP[i] = mangTangDan;
                hienThiDs(mangSP, "dssp");
            }

        }
    }
}


/**-----------------------------------------------------Khuyễn mãi lớn -------------------------------------------------------------------*/
function onclickDongYCapNhatSanPhamKhuyenMaiLon() {

    console.log(`Click Cập Nhật sản phẩm cho vi tri ${viTriCanSua}`);

    let nodeSuaTen = document.getElementById("sua-ten-sp");
    let nodeSuahinAnh = document.getElementById("sua-hinh-anh-sp");


    let ten = nodeSuaTen.value;
    let hinhAnh = nodeSuahinAnh.value;


    let spMoi = {
        ten: ten,
        hinhAnh: hinhAnh,

    }

    mangKhuyenMailon[viTriCanSua] = spMoi;
    hienThiDsKhuyenMaiLon(mangKhuyenMailon, "khuyen-mai-lon");

    let mang1 = JSON.stringify(mangKhuyenMailon);
    localStorage.setItem("san-pham-khuyen-mai-lon", mang1);


    let nodeSuaXanPham = document.getElementById("form-cap-nhat");
    nodeSuaXanPham.innerHTML = ` <style>
.container-form-cap-nhat-san-pham {
    display:none;
    
}

</style>`


}

/**
 * 
 * @param {int} viTri 
 */
function onclickSuaSanPhamKhuyenMaiLon(viTri) {
    viTriCanSua = viTri;
    let doiTuongCanSua = mangKhuyenMailon[viTri];

    console.log(doiTuongCanSua);



    console.log(`Vị trí cần sửa là ${viTriCanSua}`);
    let nodeSuaXanPham = document.getElementById("form-cap-nhat");
    nodeSuaXanPham.innerHTML = `


    <div class="container-form-cap-nhat-san-pham">
    <div class="form-cap-nhat-san-pham">
       
        <label for="sua-ten-sp">Tên sản phẩm</label>
        <input type="text" id="sua-ten-sp">

        <label for="sua-hinh-anh-sp">Link ảnh sản phẩm</label>
        <input type="text" id="sua-hinh-anh-sp">

        <button onclick="onclickDongYCapNhatSanPhamKhuyenMaiLon()">Cập nhật sản phẩm</button>
        <button onclick="onclickThoatFormCapNhat()">Hủy</button>
    </div>
</div>
    

    `


    //3.  add thông tin mẫu lên bảng
    let nodeSuaTen = document.getElementById("sua-ten-sp");
    nodeSuaTen.value = doiTuongCanSua.ten;

    let nodeSuahinAnh = document.getElementById("sua-hinh-anh-sp");
    nodeSuahinAnh.value = doiTuongCanSua.hinhAnh;



}

function ClickThemSanPhamMoiKhuyenMaiLon() {

    let themSp = document.getElementById("form-cap-nhat");
    themSp.innerHTML = `
 
 
     <div class="container-form-cap-nhat-san-pham">
     <div class="form-cap-nhat-san-pham">
        
         <label for="hinh-anh-san-pham">Link ảnh sản phẩm</label>
         <input type="text" id="hinh-anh-san-pham">
         <label for="ten-sp">Tên sản phẩm</label>
         <input type="text" id="ten-sp">
         <button onclick="themSanPhamMoiKhuyemMaiLon()">Thêm Sản Phẩm</button>
         <button onclick="onclickThoatFormCapNhat()">Hủy</button>
     </div>
 </div>
     
 
     `
}
function themSanPhamMoiKhuyemMaiLon() {
    console.log(`Click Thêm sản phẩm `);

    let nodeSuaTen = document.getElementById("ten-sp");
    let nodeSuahinAnh = document.getElementById("hinh-anh-san-pham");

    let ten1 = nodeSuaTen.value;
    let hinhAnh1 = nodeSuahinAnh.value;

    if (hinhAnh1 == `` || ten1 == ``) {
        alert("Bạn thiếu rồi!!")
    } else {
        let spMoi = {
            ten: ten1,
            hinhAnh: hinhAnh1,

        }

        mangKhuyenMailon.push(spMoi)
        hienThiDsKhuyenMaiLon(mangKhuyenMailon, "khuyen-mai-lon");

        let mang1 = JSON.stringify(mangKhuyenMailon);
        localStorage.setItem("san-pham-khuyen-mai-lon", mang1);
    }
}
let jsonkhuyemmailon = localStorage.getItem("san-pham-khuyen-mai-lon");
let mangKhuyenMailon = JSON.parse(jsonkhuyemmailon);

function hienThiDsKhuyenMaiLon(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {

        sp.innerHTML = sp.innerHTML + `
        
        <div class="san-pham1">
        
                <div class="hinh-anh">
                    <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
                </div>
                <h2 class="ten"> ${mang[i].ten}</h2>
                <button onclick="onclickSuaSanPhamKhuyenMaiLon(${i})">Sửa sản phẩm</button>
                <button onClick="xoaSanPhamKhuyenMaiLon(${i});thongBaoXoa()">Xóa sản phẩm</button>
            </div>

        `

    }
}


hienThiDsKhuyenMaiLon(mangKhuyenMailon, "khuyen-mai-lon");


function xoaSanPhamKhuyenMaiLon(viTri) {

    console.log(`Xóa sản phẩm tại vị trí ${viTri}`);
    mangKhuyenMailon.splice(viTri, 1);

    hienThiDsKhuyenMaiLon(mangKhuyenMailon, "khuyen-mai-lon");

    let mang1 = JSON.stringify(mangKhuyenMailon);
    localStorage.setItem("san-pham-khuyen-mai-lon", mang1);

}
function timKiemlon() {
    console.log("tìm kiem");
    let mangTimKiem = [];
    let nodeInputTimkiem = document.getElementById("tim-kiem-san-pham");

    let timKiem = nodeInputTimkiem.value;

    for (i = 0; i < mangKhuyenMailon.length; i++) {

        if (mangKhuyenMailon[i].ten.includes(timKiem)) {
            mangTimKiem.push(mangKhuyenMailon[i]);
        }
    }
    hienThiDsKhuyenMaiLon(mangTimKiem, "khuyen-mai-lon");
}

/**-----------------------------------------------------------------DÀnh riêng cho bố mẹ-------------------------------------------------*/
function onclickDongYCapNhatSanPhamDanhRiengChoBoMe() {

    console.log(`Click Cập Nhật sản phẩm cho vi tri ${viTriCanSua}`);

    let nodeSuaTen = document.getElementById("sua-ten-sp");
    let nodeSuahinAnh = document.getElementById("sua-hinh-anh-sp");
    let nodeSuaGia = document.getElementById("sua-gia-sp");

    let ten = nodeSuaTen.value;
    let hinhAnh = nodeSuahinAnh.value;
    let gia = nodeSuaGia.value;

    let spMoi = {
        ten: ten,
        hinhAnh: hinhAnh,
        gia: gia,
    }

    mangDanhRiengChoBoMe[viTriCanSua] = spMoi;
    hienThiDsDanhRiengChoBoMe(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");

    let mang2 = JSON.stringify(mangDanhRiengChoBoMe);
    localStorage.setItem("san-pham-danh-rieng-cho-bo-me", mang2);


    let nodeSuaXanPham = document.getElementById("form-cap-nhat");
    nodeSuaXanPham.innerHTML = ` <style>
.container-form-cap-nhat-san-pham {
    display:none;
    
}

</style>`


}


function onclickSuaSanPhamDanhRiengChoBoMe(viTri) {
    viTriCanSua = viTri;
    let doiTuongCanSua = mangDanhRiengChoBoMe[viTri];

    console.log(doiTuongCanSua);



    console.log(`Vị trí cần sửa là ${viTriCanSua}`);
    let nodeSuaXanPham = document.getElementById("form-cap-nhat");
    nodeSuaXanPham.innerHTML = `


    <div class="container-form-cap-nhat-san-pham">
    <div class="form-cap-nhat-san-pham">
        <!-- Cập nhật sản phẩm -->
        <label for="sua-ten-sp">Tên sản phẩm</label>
        <input type="text" id="sua-ten-sp">

        <label for="sua-gia-sp">Giá sản phẩm</label>
        <input type="number" min="1" id="sua-gia-sp">

        <label for="sua-hinh-anh-sp">Link ảnh sản phẩm</label>
        <input type="text" id="sua-hinh-anh-sp">

        <button onclick="onclickDongYCapNhatSanPhamDanhRiengChoBoMe()">Cập nhật sản phẩm</button>
        <button onclick="onclickThoatFormCapNhat()">Hủy</button>
    </div>
</div>
    

    `


    //3.  add thông tin mẫu lên bảng
    let nodeSuaTen = document.getElementById("sua-ten-sp");
    nodeSuaTen.value = doiTuongCanSua.ten;

    let nodeSuahinAnh = document.getElementById("sua-hinh-anh-sp");
    nodeSuahinAnh.value = doiTuongCanSua.hinhAnh;

    let nodeSuaGia = document.getElementById("sua-gia-sp");

    nodeSuaGia.value = doiTuongCanSua.gia;

}

/**----------------------------------------------------------- */


function ClickThemSanPhamDanhRiengChoBoMe() {

    let themSp = document.getElementById("form-cap-nhat");
    themSp.innerHTML = `
 
 
     <div class="container-form-cap-nhat-san-pham">
     <div class="form-cap-nhat-san-pham">
        
         <label for="hinh-anh-san-pham">Link ảnh sản phẩm</label>
         <input type="text" id="hinh-anh-san-pham">
         <label for="ten-sp">Tên sản phẩm</label>
         <input type="text" id="ten-sp">
 
         <label for="gia-sp">Giá sản phẩm</label>
         <input type="number" min="1" id="gia-sp">
 
       
 
         <button onclick="themSanPhamMoiDanhRiengChoBoMe()">Thêm Sản Phẩm</button>
         <button onclick="onclickThoatFormCapNhat()">Hủy</button>
     </div>
 </div>
     
 
     `


}
function themSanPhamMoiDanhRiengChoBoMe() {
    console.log(`Click Thêm sản phẩm `);

    let nodeSuaTen = document.getElementById("ten-sp");
    let nodeSuahinAnh = document.getElementById("hinh-anh-san-pham");
    let nodeSuaGia = document.getElementById("gia-sp");

    let ten1 = nodeSuaTen.value;
    let hinhAnh1 = nodeSuahinAnh.value;
    let gia1 = nodeSuaGia.value;
    if (hinhAnh1 == `` || gia1 == `` || ten1 == ``) {
        alert("Bạn thiếu rồi kìa!! Nhập đầy đủ vào !!!")
    } else {

        let spMoi = {
            ten: ten1,
            hinhAnh: hinhAnh1,
            gia: gia1,
        }

        mangDanhRiengChoBoMe.push(spMoi)
        hienThiDsDanhRiengChoBoMe(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");

        let mang2 = JSON.stringify(mangDanhRiengChoBoMe);
        localStorage.setItem("san-pham-danh-rieng-cho-bo-me", mang2);

    }


}
let jsonDanhRiengChoBoMe = localStorage.getItem("san-pham-danh-rieng-cho-bo-me");
let mangDanhRiengChoBoMe = JSON.parse(jsonDanhRiengChoBoMe);

function hienThiDsDanhRiengChoBoMe(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        
        <div class="san-pham">
        
                <div class="hinh-anh">
                    <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
                </div>
                <h2 class="ten"> ${mang[i].ten}</h2>
                <h2 class="gia"> ${mang[i].gia}</h2>
                
                <button onclick="onclickSuaSanPhamDanhRiengChoBoMe(${i})">Sửa sản phẩm</button>
                <button onClick="xoaSanPhamDanhRiengChoBoMe(${i});thongBaoXoa()">Xóa sản phẩm</button>
            </div>

        `
    }
}


hienThiDsDanhRiengChoBoMe(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");


function xoaSanPhamDanhRiengChoBoMe(viTri) {

    console.log(`Xóa sản phẩm tại vị trí ${viTri}`);
    mangDanhRiengChoBoMe.splice(viTri, 1);



    hienThiDsDanhRiengChoBoMe(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");


    let mang2 = JSON.stringify(mangDanhRiengChoBoMe);
    localStorage.setItem("san-pham-danh-rieng-cho-bo-me", mang2);

}
function timKiemDanhRiengChoBoMe() {
    console.log("tìm kiem");
    let mangTimKiem = [];
    let nodeInputTimkiem = document.getElementById("tim-kiem-san-pham");

    let timKiem = nodeInputTimkiem.value;

    for (i = 0; i < mangKhuyenMailon.length; i++) {

        if (mangDanhRiengChoBoMe[i].ten.includes(timKiem)) {
            mangTimKiem.push(mangDanhRiengChoBoMe[i]);
        }
    }
    hienThiDsDanhRiengChoBoMe(mangTimKiem, "danh-rieng-cho-bo-me");
}
function sapXepGiamDanDanhRiengChoBoMe() {
    let mangTangDan = [];
    for (let i = 0; i < mangDanhRiengChoBoMe.length - 1; i++) {
        for (let j = i + 1; j < mangDanhRiengChoBoMe.length; j++) {
            if (mangDanhRiengChoBoMe[i].gia < mangDanhRiengChoBoMe[j].gia) {
                mangTangDan = mangDanhRiengChoBoMe[j];
                mangDanhRiengChoBoMe[j] = mangDanhRiengChoBoMe[i];
                mangDanhRiengChoBoMe[i] = mangTangDan;
                hienThiDsDanhRiengChoBoMe(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");
            }

        }
    }
}
function sapXepTangDanDanhRiengChoBoMe() {
    let mangTangDan = [];
    for (let i = 0; i < mangDanhRiengChoBoMe.length - 1; i++) {
        for (let j = i + 1; j < mangDanhRiengChoBoMe.length; j++) {
            if (mangDanhRiengChoBoMe[i].gia > mangDanhRiengChoBoMe[j].gia) {
                mangTangDan = mangDanhRiengChoBoMe[j];
                mangDanhRiengChoBoMe[j] = mangDanhRiengChoBoMe[i];
                mangDanhRiengChoBoMe[i] = mangTangDan;
                hienThiDsDanhRiengChoBoMe(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");
            }

        }
    }
}

function playAudio() {

    var myAudio = new Audio("Save-Me-DEAMN.mp3");

    alert("Phát nhạc !!!!");
    myAudio.play();
}
