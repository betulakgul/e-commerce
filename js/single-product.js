import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import zoomFunc from "./single-product/zoom.js"; //default olarak export edilen func lar {} içine alınmadı
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentsFunc from "./single-product/comments.js"

const productId = localStorage.getItem("productId") //localstorage de productId alanı ...
  ? JSON.parse(localStorage.getItem("productId")) // ... varsa productId yi al
  : localStorage.setItem("productId", JSON.stringify(1)); // ... yoksa productId ye 1 ata

const products = localStorage.getItem("products") //localstorage de products alanı ...
  ? JSON.parse(localStorage.getItem("products")) // ... varsa products ları al
  : localStorage.setItem("products", JSON.stringify([])); // ... yoksa boş dizi dönsün

const findProduct = products.find((item) => item.id === Number(productId));

//! product title */
const productTitle = document.querySelector(".product-title");

productTitle.innerHTML = findProduct.name;

//! product price */
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`;
oldPriceDOM.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`;

//! product gallery */

const singleImageDOM = document.querySelector("#single-image");

singleImageDOM.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
  result += `
       <li class="glide__slide">
        <img
        src=${item}
        alt=""
        class="img-fluid"
        />
    </li>`;
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

const productThumbs = document.querySelectorAll(
  ".product-thumb .glide__slide img",
);

productThumbs[0].classList.add("active"); //sayfa ilk yüklendiğinde ilk resim active olsun

//! add to cart
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []; //cart varsa json a dönüştür, yoksa boş ata

const findCart = cart.find((item) => item.id === findProduct.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");
if (findCart) {
  btnAddToCart.setAttribute("disabled", "disabled"); //sepette aynı üründen varsa, sepete ekle butonu disable yap
  
} else {
  btnAddToCart.addEventListener("click", function () {
    cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
    //{... :findproduct ın tüm bilgilerini al, yanına ek quantity adında veri oluştur, içini quantityDOM un valuesi yap ama number a çevir yoksa string değer alır ve toplama işlemini yapamaz
    btnAddToCart.setAttribute("disabled", "disabled");
    localStorage.setItem("cart", JSON.stringify(cart));
    cartItems.innerHTML = cart.length;
    
  });
}
