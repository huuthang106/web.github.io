var images = [];

for (let i = 0; i < 5; i++) {
  images[i] = new Image();
  images[i].src = "img/a" + i + ".jpg";
}

var index = 0;

function next0() {

  index++;
  if (index >= images.length) {
    index = 0;
  }
  var sp1 = document.getElementById("sp1");
  sp1.src = images[index].src;


}

function before0() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  var sp1 = document.getElementById("sp1");
  sp1.src = images[index].src;

}


var images1 = [];

for (let i = 0; i < 5; i++) {
  images1[i] = new Image();
  images1[i].src = "img/b" + i + ".jpg";
}

var index1 = 0;

function next1() {

  index1++;
  if (index1 >= images1.length) {
    index1 = 0;
  }
  var sp1 = document.getElementById("sp2");
  sp1.src = images1[index1].src;


}

function before1() {
  index1--;
  if (index1 < 0) {
    index1 = images1.length - 1;
  }
  var sp1 = document.getElementById("sp2");
  sp1.src = images1[index1].src;

}

//onmouseover
var out = new Image();
out.src = "img/3.jpg";
var over = new Image();
over.src = "img/0.jpg";
function fover() {
  var anh = document.getElementById("onmou");
  anh.src = over.src;
}
function fout() {
  var anh = document.getElementById("onmou");
  anh.src = out.src
}

const registerButton = document.querySelector('#registerButton');
registerButton.addEventListener('click', () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  localStorage.setItem(username, password);
  alert('Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.');
});


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Kiểm tra xem các trường nhập liệu có được điền đầy đủ và chứa thông tin đúng hay không
  if (username === '' || password === '') {
    event.preventDefault();
    alert('Vui lòng điền đầy đủ thông tin tài khoản.');
  } else {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword !== password) {
      event.preventDefault();
      alert('Sai tên đăng nhập hoặc mật khẩu.');
    } else {
     
      alert("đăng nhập thành công xin  chào " +""+document.getElementById("username").value);
      document.querySelector('#login').style.display = 'none';
    
    }
  }
  
} );

function login1(){
  document.querySelector('#login').style.display ='block'
}

function xoa(){
  console.log('hi');
  document.querySelector('#login').style.display ='none'
}

const buyButton = document.querySelector('.buy');

function buy0(){
  
  var username1 = document.getElementById("username").value;
  console.log(username1);
  if(username1==""){
    alert("Bạn chưa đăng nhập")
  }
  alert("Mua Hàng thành công")
}

$(document).ready(function(){
  $('.suKien').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

var images2 = [];

for (let i = 0; i < 5; i++) {
  images2[i] = new Image();
  images2[i].src = "img/d" + i + ".jpg";
}

var index2 = 0;

function next2() {

  index2++;
  if (index2 >= images2.length) {
    index2 = 0;
  }
  var sp3 = document.getElementById("sp3");
  sp3.src = images2[index2].src;


}

function before2() {
  index2--;
  if (index2 < 0) {
    index2 = images2.length - 1;
  }
  var sp3 = document.getElementById("sp3");
  sp3.src = images2[index2].src;

}