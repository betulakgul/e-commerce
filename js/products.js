import { product1 } from "./glide.js";

let products = localStorage.getItem("products")
? JSON.parse(localStorage.getItem("products")) //veri varsa döndür yoksa boş dizi döndür
:[];
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];



function addToCart() {
  const cartItems = document.querySelector(".header-cart-count");
  const buttons = [...document.getElementsByClassName("add-to-cart")]; //array olarak foreach içinde dönebilmesi için [...] kullandık
  buttons.forEach((button) => {
    const inCart = cart.find((item) => item.id === Number(button.dataset.id)); //sepete ekle butonuna basarken aynı ürünün sepette olup olmadığını inCart değişkenine ata
    if (inCart){ // inCart = true ise yani aynı ürün sepette varsa
      button.setAttribute("disabled", "disabled"); //ve butonu disable yap
    } else {
       button.addEventListener("click", function (e) {
      e.preventDefault(); /**sayfa yenilenmesin */
      const id = e.target.dataset.id;
      const findProduct = products.find((product) => product.id === Number(id));
      cart.push({ ...findProduct, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      button.setAttribute("disabled", "disabled"); //ürünü ekledikten sonra butonu disable yap
      cartItems.innerHTML=cart.length;
    });
    }

   
  });
}
function productRoute(){
const productLink = document.getElementsByClassName("product-link");
Array.from(productLink).forEach((button)=>{
  button.addEventListener("click",function (e){
    e.preventDefault(); 
    const id = e.target.dataset.id;
    localStorage.setItem("productId", JSON.stringify(id));
    window.location.href ="single-product.html";

  })
})
}

function productsFunc() {
  

const productsContainer = document.getElementById("product-list");

let results="";
products.forEach((item) => {
    // `` -> , + Alt Gr
    results += ` <li class="product-item glide__slide">   
                <div class="product-image">
                  <a href="#">
                    <img
                      src=${item.img.singleImage}
                      alt=""
                      class="img1"
                    />
                    <img
                      src=${item.img.thumbs[1]}
                      alt=""
                      class="img2"
                    />
                  </a>
                </div>
                <div class="product-info">
                  <a href="#" class="product-title">${item.name}</a>
                  <ul class="product-star">
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div class="product-prices">
                    <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong> 
                   
                    <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
                   
                  </div>
                  <span class="product-discount">-${item.discount}%</span>
                  <div class="product-links">
                    <button class="add-to-cart" data-id=${item.id}>
                      <i class="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i class="bi bi-heart-fill"></i>
                    </button>
                    <a href="#" class="product-link" data-id=${item.id}>
                      <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </li>`  ;
                productsContainer ? (productsContainer.innerHTML=results) : ""; //  productsContainer varsa results al, yoksa boş
              addToCart();
});
product1();
productRoute();

}
export default productsFunc;

