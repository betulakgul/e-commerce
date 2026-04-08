
import headerFunc from "./header.js";
import productsFunc from "./products.js"; 


//! ÖNEMLİ UYARI
//! visuale data.json dosyasını ekledikten sonra index.html sağ tık ->open with live server yapmamız lazım yoksa javasicript çalışmaz hata verir

//! add product to localStroge start
(async function(){
  
  const photos = await fetch('../js/data.json');
  const data = await photos.json();
 
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];  //data true ise set et, değilse boş array set et
  productsFunc();
})(); //fonk ismi vermeden direk bu şekil çağırabiliyoruz
//! add product to localStroge end

//! add cartItems to localStroge start
const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0"; 
//cartta ürün varsa onun sayısını döndür, yoksa 0 döndür
//! add cartItems to localStroge end