
import headerFunc from "./header.js";
import productsFunc from "./products.js"; 

//! add product to localStroge
//! ÖNEMLİ UYARI
//! visuale data.json dosyasını ekledikten sonra index.html sağ tık ->open with live server yapmamız lazım yoksa javasicript çalışmaz hata verir

async function getData(){
  
  const photos = await fetch('../js/data.json');
  const data = await photos.json();
 
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];  //data true ise set et, değilse boş array set et
  
}
getData();

const products = localStorage.getItem("products");


