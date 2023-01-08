function initData(){
    let sanPham = [{"ten":"Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/04/45153-59499-large_mobile/vinamilk-optimum-gold-4-900g.jpg","gia":"700"},{"ten":"Combo 2 lon Sữa Nan Organic  Organic Organic      3 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/11/44613-69139-large_mobile/combo-2-nestle-nan-organic-3-2-6-tuoi-900g.jpg","gia":"800"},{"ten":"Combo 2 gói Bỉm tã quần Huggies  size 58 miếng (6-11kg)","hinhAnh":"https://cdn.concung.com/2020/11/49452-68964-large_mobile/combo-2-goi-ta-quan-sieu-cao-cap-huggies-platinum-nature-made-m-58-mieng.jpg","gia":"900"},{"ten":"Combo 2 lon Sữa Similac Eye-Q Similac Eye-Q số 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/09/45088-65917-large_mobile/combo-2-similac-iq-4-hmo-900g.jpg","gia":"100"},{"ten":"Bỉm tã dán Bobby siêu thấm size M 48 miếng 48 miếng(6-11kg)","hinhAnh":"https://cdn.concung.com/2020/08/20472-64510-large_mobile/ta-dan-bobby-fresh-sieu-mong-m-6-11kg-48-mieng.jpg","gia":"300"},{"ten":"Combo 2 lon Sữa Similac Eye-Q Similac Eye-Q số 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/11/48127-68045-large_mobile/thuc-pham-bo-sung-aptakid-3-growing-up-milk-formula-2-tuoi-tro-len-900g.jpg","gia":"200"},{"ten":"Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/11/44613-69139-large_mobile/combo-2-nestle-nan-organic-3-2-6-tuoi-900g.jpg","gia":"700"},{"ten":"Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2021/02/48825-70754-large_mobile/thung-thuc-pham-bo-sung-sua-tiet-trung-similac-eye-q-180ml-loc-4-hop-moi-12-loc.jpg","gia":"120"},{"ten":"Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2021/04/44965-71683-large_mobile/chao-tuoi-baby-bo-dau-ha-lan-ca-rot-sg-food-10-thang-240g.jpg","gia":"900"},{"ten":"Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/11/44613-69139-large_mobile/combo-2-nestle-nan-organic-3-2-6-tuoi-900g.jpg","gia":"150"}];

    let jsonSp = localStorage.getItem('san-pham1');
    if(jsonSp==null)
        localStorage.setItem('san-pham1', JSON.stringify(sanPham))
}

initData();
function initData2(){
    let sanPham1 =[{"ten":"Giảm 30% khi mua combo 5 gói cháo tươi SG Food","hinhAnh":"https://concung.com/img/promotion/2021/SGF.png","gia":"1"},{"ten":"Giảm 30% khi mua combo 5 gói cháo tươi SG Food","hinhAnh":"https://concung.com/img/promotion/2021/SGF.png","gia":"1"},{"ten":"Tặng thú bông con sâu khi mua sữa Bellamy","hinhAnh":"https://concung.com/img/promotion/2021/BELLAMY.png"},{"ten":"Tặng Phiếu mua hàng thời trang, đồ chơi 200.000 ..","hinhAnh":"https://concung.com/img/promotion/2021/0bc67c2835adc7f39ebc.jpg"},{"ten":"Tặng đồ chơi bàn học lắp ghép khi mua tã Goon","hinhAnh":"https://concung.com/img/promotion/2021/GOON.png"},{"ten":"Tặng máy đo huyết áp, bình giữ nhiệt, thố 333","hinhAnh":"https://concung.com/img/promotion/2021/KMLSUA04.jpg"},{"ten":"Tặng ghế lười, balo đi sinh, ghế bầu khi mua Sim..","hinhAnh":"https://concung.com/img/promotion/2021/KMLSUA07.jpg"},{"ten":"Mua Abbott Grow tặng đồ chơi vận động","hinhAnh":"https://concung.com/img/promotion/2021/KMLSUA05.jpg"},{"ten":"Mua Abbott Grow tặng đồ chơi vận động","hinhAnh":"https://concung.com/img/promotion/2021/KMLTA_Merries.png"},{"ten":"Tặng thảm bông, bộ bàn lego khi mua tã Genki","hinhAnh":"https://concung.com/img/promotion/2021/KMLTA_Genki.png"}];

    let jsonSp = localStorage.getItem('san-pham-khuyen-mai-lon');
    if(jsonSp==null)
        localStorage.setItem('san-pham-khuyen-mai-lon', JSON.stringify(sanPham1))
}
initData2();
function initData3(){
    let sanPham2 =[{"ten":"Combo 2 lon Sữa Vinamilk Optimum Gold 4 900g (2-6 tuổi)","hinhAnh":"https://cdn.concung.com/2020/04/45153-59499-large_mobile/vinamilk-optimum-gold-4-900g.jpg","gia":"999"},{"ten":"Combo 2 Sữa Glico Icreo số 1 820g - Combo 2 lon (9-36 tháng)","hinhAnh":"https://cdn.concung.com/2020/09/32890-64808-cat/glico-icreo-so-1-820g-combo-2-lon.jpg","gia":"888"},{"ten":"Thùng sữa dinh dưỡng pha sẵn Nestle NAN OPTIPRO Kid 180ml (Lốc 4) - 6..","hinhAnh":"https://cdn.concung.com/2020/11/47251-69205-cat/thung-thuc-pham-bo-sung-nestle-nan-optipro-kid-180ml-loc-4-6-loc.jpg","gia":"111"},{"ten":"Sữa Glico Icreo số 0 800g - combo 2 lon  combo 2 lon (0-12 tháng)","hinhAnh":"https://cdn.concung.com/2020/09/31082-64762-cat/sua-bot-glico-icreo-so-0-800g-combo-2-lon.jpg","gia":"333"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn HG 200g","hinhAnh":"https://cdn.concung.com/2019/07/41863-51433-cat/bot-an-dam-ridielac-gold-4-vi-man-hg-200g.jpg","gia":"789"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn HG 200g","hinhAnh":"https://cdn.concung.com/2019/10/37625-52715-cat/nestle-nan-al-110-0-3-tuoi-400g-new.jpg","gia":"987"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g","hinhAnh":"https://cdn.concung.com/2019/07/41864-51432-cat/ridielac-gold-3-vi-ngot-hg-200g.jpg","gia":"123"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g","hinhAnh":"https://cdn.concung.com/2019/07/41864-51432-cat/ridielac-gold-3-vi-ngot-hg-200g.jpg","gia":"785"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g","hinhAnh":"https://cdn.concung.com/2019/07/41864-51432-cat/ridielac-gold-3-vi-ngot-hg-200g.jpg","gia":"950"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g","hinhAnh":"https://cdn.concung.com/2019/09/43247-52461-cat/vi-2-num-ty-co-thuong-wesser-size.jpg","gia":"450"},{"ten":"Combo 2 bột ăn dặm Ridielac Gold 4 Vị Mặn GGHH 200g","hinhAnh":"https://cdn.concung.com/2019/09/43247-52461-cat/vi-2-num-ty-co-thuong-wesser-size.jpg","gia":"100"},{"ten":"Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)","hinhAnh":"https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg","gia":"990"},{"ten":"Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)","hinhAnh":"https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg","gia":"960"},{"ten":"Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)","hinhAnh":"https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg","gia":"960"},{"ten":"Bỉm tã dán Huggies Platinum size XL 44 miếng (12-17kg)","hinhAnh":"https://cdn.concung.com/2019/08/40930-51741-cat/ta-dan-sieu-cao-cap-huggies-platinum-xl-44-mieng.jpg","gia":"990"}];

    let jsonSp = localStorage.getItem('san-pham-danh-rieng-cho-bo-me');
    if(jsonSp==null)
        localStorage.setItem('san-pham-danh-rieng-cho-bo-me', JSON.stringify(sanPham2))
}
initData3();
function initData4(){
    let sanPham4 =[];

    let jsonSp = localStorage.getItem('gio-hang');
    if(jsonSp==null)
        localStorage.setItem('gio-hang', JSON.stringify(sanPham4))
}
initData4();

let jsonMuaHang = localStorage.getItem("gio-hang");
let mangGioHang = JSON.parse(jsonMuaHang);


function clickThemVaoGioHangMang1(viTri){
    console.log(`Vi trí mua hàng ${viTri}`);
    mangGioHang.push(mangDeal[viTri]);
    console.log(mangGioHang);
    
    let mang = JSON.stringify(mangGioHang);
    localStorage.setItem("gio-hang", mang);
    
}
function clickThemVaoGioHangMang2(viTri){
    console.log(`Vi trí mua hàng ${viTri}`);
    mangGioHang.push(mangDanhRiengChoBoMe[viTri]);
    console.log(mangGioHang);
    
    let mang = JSON.stringify(mangGioHang);
    localStorage.setItem("gio-hang", mang);
    
}

function thongBaoThem()
{
    alert("Đã thêm vào giỏ hàng ! ");
}
function playAudio() { 

    var myAudio = new Audio("On My Way.mp3");
   
    alert("Phát nhạc !");
    myAudio.play();
  } 

/**-------------------------------------------------------------------------------------------------------------------------------- */
let jsonDSSanPham = localStorage.getItem("san-pham1");
let mangDeal = JSON.parse(jsonDSSanPham);

let jsonkhuyemmailon = localStorage.getItem("san-pham-khuyen-mai-lon");
let mangKhuyenMailon = JSON.parse(jsonkhuyemmailon);

let jsonDanhRiengChoBoMe = localStorage.getItem("san-pham-danh-rieng-cho-bo-me");
let mangDanhRiengChoBoMe = JSON.parse(jsonDanhRiengChoBoMe);



/**
 * 
 * @param {[]} mang 
 * @param {String} idNodes 
 */
function hienThiDs(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        
        <div class="san-pham " >
        
        <div class="hinh-anh">
            <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
        </div>
        <p class="ten"> ${mang[i].ten}</p>
        <h2 class="gia">${mang[i].gia}K</h2>
        
        <button class="but" onclick="clickThemVaoGioHangMang1(${i});thongBaoThem()">Mua Sản phẩm</button>
        
    </div>

        `
    }
}

hienThiDs(mangDeal, "dssp");
hienThiDs1(mangKhuyenMailon, "khuyen-mai-lon");
hienThiDs3(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");

function hienThiDs1(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        
        <div class="san-pham1 " >
        
        <div class="hinh-anh">
            <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
        </div>
        <p class="ten"> ${mang[i].ten}</p>
      
    </div>

        `
    }
}
function hienThiDs3(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        
        <div class="san-pham " >
        
        <div class="hinh-anh">
            <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
        </div>
        <p class="ten"> ${mang[i].ten}</p>
        <h2 class="gia">${mang[i].gia}K</h2>
        
        <button class="but" onclick="clickThemVaoGioHangMang2(${i});thongBaoThem()">Mua Sản phẩm</button>
        
    </div>

        `
    }
}

function timKiemdeal() {
    console.log("Tìm kiếm");
    let mangTimKiem = [];
    let nodeInputTimkiem = document.getElementById("tim-kiem-san-pham");

    let timKiem = nodeInputTimkiem.value;

    for (i = 0; i <mangDeal.length; i++) {

        if (mangDeal[i].ten.includes(timKiem)) {
            mangTimKiem.push(mangDeal[i]);
        }
    }
    hienThiDs(mangTimKiem, "dssp");
}
function timKiemKhuyenMaiLon() {
    console.log("Tìm kiếm");
    let mangTimKiem = [];
    let nodeInputTimkiem = document.getElementById("tim-kiem-san-pham");

    let timKiem = nodeInputTimkiem.value;

    for (i = 0; i <mangKhuyenMailon.length; i++) {

        if (mangKhuyenMailon[i].ten.includes(timKiem)) {
            mangTimKiem.push(mangKhuyenMailon[i]);
        }
    }
    hienThiDs1(mangTimKiem, "khuyen-mai-lon");
}
function timKiemDanhRiengChoBoMe() {
    console.log("Tìm kiếm");
    let mangTimKiem = [];
    let nodeInputTimkiem = document.getElementById("tim-kiem-san-pham");

    let timKiem = nodeInputTimkiem.value;

    for (i = 0; i <mangDanhRiengChoBoMe.length; i++) {

        if (mangDanhRiengChoBoMe[i].ten.includes(timKiem)) {
            mangTimKiem.push(mangDanhRiengChoBoMe[i]);
        }
    }
    hienThiDs(mangTimKiem, "danh-rieng-cho-bo-me");
}


function sapXepTangDan() {
    console.log("Xắp sếp");
    let mangTangDan = [];
    for (let i = 0; i < mangDeal.length - 1; i++) {
        for (let j = i + 1; j < mangDeal.length; j++) {
            if (mangDeal[i].gia > mangDeal[j].gia) {
                mangTangDan = mangDeal[j];
                mangDeal[j] = mangDeal[i];
                mangDeal[i] = mangTangDan;
                hienThiDs(mangDeal, "dssp");
            }

        }
    }
}
function sapXepGiamDan() {
    console.log("Xắp sếp");
    let mangTangDan = [];
    for (let i = 0; i < mangDeal.length - 1; i++) {
        for (let j = i + 1; j < mangDeal.length; j++) {
            if (mangDeal[i].gia < mangDeal[j].gia) {
                mangTangDan = mangDeal[j];
                mangDeal[j] = mangDeal[i];
                mangDeal[i] = mangTangDan;
                hienThiDs(mangDeal, "dssp");
            }

        }
    }
}

function sapXepTangDanDanhRiengChoBoMe() {
    console.log("Xắp sếp");
    let mangTangDan = [];
    for (let i = 0; i < mangDanhRiengChoBoMe.length - 1; i++) {
        for (let j = i + 1; j < mangDanhRiengChoBoMe.length; j++) {
            if (mangDanhRiengChoBoMe[i].gia > mangDanhRiengChoBoMe[j].gia) {
                mangTangDan = mangDanhRiengChoBoMe[j];
                mangDanhRiengChoBoMe[j] = mangDanhRiengChoBoMe[i];
                mangDanhRiengChoBoMe[i] = mangTangDan;
                hienThiDs(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");
            }

        }
    }
}
function sapXepGiamDanDanhRiengChoBoMe() {
    console.log("Xắp sếp");
    let mangTangDan = [];
    for (let i = 0; i < mangDanhRiengChoBoMe.length - 1; i++) {
        for (let j = i + 1; j < mangDanhRiengChoBoMe.length; j++) {
            if (mangDanhRiengChoBoMe[i].gia < mangDanhRiengChoBoMe[j].gia) {
                mangTangDan = mangDanhRiengChoBoMe[j];
                mangDanhRiengChoBoMe[j] = mangDanhRiengChoBoMe[i];
                mangDanhRiengChoBoMe[i] = mangTangDan;
                hienThiDs(mangDanhRiengChoBoMe, "danh-rieng-cho-bo-me");
            }

        }
    }
}


