let jsonMuaHang = localStorage.getItem("gio-hang");
let mangGioHang = JSON.parse(jsonMuaHang);

console.log(mangGioHang);
function hienThiDs(mang, idNodes) {
    let sp = document.getElementById(`${idNodes}`)
    sp.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        
        <div class="gio-hang " >
        
        <div class="hinh-anh">
            <img src="${mang[i].hinhAnh}" alt="ảnh sản phẩm">
        </div>
        <p class="ten"> ${mang[i].ten}</p>
        <p class="Gia"> Giá:</p>
        <p class="gia"> ${mang[i].gia}K</p>
        <p class="sl"> Số lượng:</p>
        <input class="SL" type="number" min="1" value = "1"  id="so-luong">
        <p class="xoa" onclick="xoaSP();thongBaoXoa()" ><i class="fas fa-trash-alt"></i></p>
        
      
    </div>

        `
    }
}
hienThiDs(mangGioHang,"dssp")

  

let nodeSL = document.getElementById("so-luong");
let SL = nodeSL.value;

console.log(SL);
// xóa sản phẩm

function xoaSP(viTri) {
    console.log(viTri);
    mangGioHang.splice(viTri, 1);
    hienThiDs(mangGioHang,"dssp")
    let mang = JSON.stringify(mangGioHang);
    localStorage.setItem("gio-hang", mang);

}

function tongTien(){
    let sum = 0;

    for (let i = 0; i < mangGioHang.length; i = i + 1) {
        console.log(Number(mangGioHang[i].gia));

        sum = sum + (Number(mangGioHang[i].gia) *SL)    ;
        console.log(sum);

        let nodeSum = document.getElementById("tongTien");
        nodeSum.innerHTML = "";
        nodeSum.innerHTML = nodeSum.innerHTML + `
            
         <a>${sum}</a>`
    
    }
    }
    tongTien()
    

    function playAudio() { 

        var myAudio = new Audio("On My Way.mp3");
       
        alert("Phát nhạc !");
        myAudio.play();
      } 
      function thongBaoXoa()
      {
          alert("Đã Xóa Sản Phẩm ! ");
      }    