
import { todayDeal } from "./todayDeal.js"
/**top-slider-section*/
let slidebtnLeft = document.getElementById("slide-btn-left");
let slidebtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

// console.log(imgItem.length-1) because image start with 0 indexing;
let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

slidebtnLeft.addEventListener("click", leftSliderBtn);

slidebtnRight.addEventListener("click", rightSliderBtn);

function leftSliderBtn() {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

function rightSliderBtn() {
  if (startSlider >= -endSlider + 100) {
    startSlider = startSlider - 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

function renderSlideAuto() {
  if (startSlider >= -endSlider + 100) {
    rightSliderBtn();
  } else {
    startSlider = +100;
  }
}
setInterval(renderSlideAuto, 2000);

/* panel,sidebar*/

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");

const sidebtn = document.querySelector(".panel-1");

sidebtn.addEventListener("click",() =>{
  sidebar.classList.add("active");
  cross.classList.add("active");
 
 
})
cross.addEventListener("click",() =>{
  sidebar.classList.remove("active");
  cross.classList.remove("active");

})

// öne çıkan fırsatlar //
const leftbtn = document.querySelector(".l-btn-1");
const rightbtn = document.querySelector(".r-btn-1");

rightbtn.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-1");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-1");
  content.scrollLeft -= 1200;
  event.preventDefault();
});

//  moda kategorisi //
const leftbtn2 = document.querySelector(".l-btn-2");
const rightbtn2 = document.querySelector(".r-btn-2");

rightbtn2.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-2");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn2.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-2");
  content.scrollLeft -= 1200;
  event.preventDefault();
});
     
//Today Deals Section//

//today deals 
console.log(todayDeal)
let todayDealProductListEl = document.querySelector(".today_deals_product_list")
console.log(todayDealProductListEl)

let todayDealProductHTML = ""

let todayDeallength = todayDeal.length

for (let i = 0; i < todayDeallength; i++) {
    // console.log(todayDeal[i])

    todayDealProductHTML += `
        <div class="today_deals_product_item">
                <div class="todayDeals_product_image">
                    <img src=${todayDeal[i].img} />
                </div>
            


            <div class="discount_Contaienr">
                <a href="#">%  ${todayDeal[i].discount} oranına varan</a>
                <a href="#">${todayDeal[i].DealOfDay}</a>
            </div>
            <p>${todayDeal[i].desc}</p>
        </div>
    `
}

todayDealProductListEl.innerHTML = todayDealProductHTML
//  console.log(todayDealProductHTML)

let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev")
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next")
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item")

let startProduct = 0;


today_deal_btn_prevEl.addEventListener("click", () => {

   
    if(startProduct < 0){
        startProduct += 500
    }
    if(startProduct > -2000){
        today_deals_product_itemEl.forEach(el =>{
            el.style.transform = `translateX(${startProduct}%)`
        })
    }

})

today_deal_btn_nextEl.addEventListener("click", () => {
    // alert("next")
    
    if(startProduct > -1500){
        startProduct -= 500
    }

    today_deals_product_itemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
    })
  
})

let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let heading1=document.getElementById("heading1");

signinBtn.onclick=function(){
    nameField.style.maxHeight="0";
    heading1.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick=function(){
    nameField.style.maxHeight="60px";
    heading1.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

let submitbtn = document.getElementById("submitbtn");

submitbtn.onclick =function(){
    submitbtn.classList.add("disable");
    location.href='index.html';
}

const addToCart = document.querySelectorAll("buy-product");
const addCart = document.querySelector("addMenuBtn");
const removeCart = document.querySelector("removeMenuBtn");
const rightManuCart = document.querySelector("cart-section");
const cartProduct = document.querySelectorAll("cart-product-list");

addToCart.forEach((cart) => {
    cart.addEventListener('click', () =>{
        cart.classList.toggle('active');
    })
})
// slider manu open and remove 
addCart.onclick = () =>{
    rightManuCart.classList.add('active');
}
removeCart.onclick = () =>{
    rightManuCart.classList.remove('active');
}

// remove product from cart
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', removeFunction)
}else{
    removeFunction();
}

function removeFunction(){  
    let removeCartBtn = document.getElementsByClassName('cart-product-remove');
    for(let i = 0; i < removeCartBtn.length; i++){
        removeCartBtn[i].addEventListener('click', (event)=>{
                cartProduct[i].remove();
                updateAmout();
        })
    }

    let qytInput = document.getElementsByClassName('cart-qty');
    for (let i = 0; i < qytInput.length; i++) {
        var inputQyt = qytInput[i];
        inputQyt.addEventListener('change', (e) =>{
            inputQyt = e.target 
            if(isNaN(inputQyt.value) || inputQyt.value <= 0){
                inputQyt.value = 1
            }
            updateAmout();
        })
    }
}

// buy button 
document.querySelector('.buy-Product-btn').addEventListener('click', ()=>{
    alert('Your Order is placed');
    let cartContanet = document.querySelectorAll('.cart-product-list')[0];
    while(cartContanet.hasChildNodes()){
       cartContanet.removeChild(cartContanet.firstChild);
    }
    updateAmout();
})


let addCardProduct = document.querySelectorAll('.buy-product');
for(let i = 0; i < addCardProduct.length; i++){
    let button = addCardProduct[i];

    // add to cart
    button.addEventListener('click', (event) => {
		const product = event.currentTarget.parentElement.querySelector('.product-title');
		let productTitle = product.querySelectorAll('.product-lable')[0].innerText;
        let productPrice = product.querySelectorAll('.product-price')[0].innerText;
        addProductToCart(productTitle, productPrice);
        updateAmout();
    })
}


function addProductToCart(productTitle, productPrice){
    let cartBoxContain = `<div class="cart-product-price">
                        <h1 class="cart-product-name">${productTitle}</h1>
                        <p class="cart-price">${productPrice}</p>
                        <input type="number" value="1" class="cart-qty">
                        </div>
                        <div class="cart-product-remove"><ion-icon name="trash-outline"></ion-icon></div> `;

   let shopingCart = document.createElement('div');
   shopingCart.classList.add('cart-wrapper'); 
   shopingCart.innerHTML = cartBoxContain;
   let cartItem = document.querySelector('#cart-product-list');
   if (cartItem.children.length > 0) {
  		let cartNameProduct = cartItem.querySelectorAll('.cart-product-name');
		for (let item of cartNameProduct) {
			if (item.innerText === productTitle) {
				alert('you have Already Add this to cart');
      			return;
			}
		}
   }
  cartItem.append(shopingCart);
  shopingCart.querySelectorAll('.cart-product-remove')[0].addEventListener('click', removeFunction);
  shopingCart.querySelectorAll('.cart-qty')[0].addEventListener('change', removeFunction);
}


function updateAmout(){
    let cartContanet = document.querySelector('#cart-product-list');
	if (cartContanet.children.length > 0) {
		let cartBoxs = cartContanet.querySelectorAll('.cart-product-price');
		var total = 0;

		for(let i = 0; i < cartBoxs.length; i++){
			let cartBox = cartBoxs[i];
			let priceElement = cartBox.querySelectorAll('.cart-price')[0];
			var price = parseFloat(priceElement.innerText.replace('₹', ''));
			let qytElement = cartBox.querySelectorAll('.cart-qty')[0];
			var quantity = qytElement.value;
			var total = Math.round(total + price * quantity) * 100 / 100;
			document.getElementById('totalAmount').innerText = '₹' + total;
		}	
	} else {
		document.getElementById('totalAmount').innerText = '₹0';
	}
    
}

    

