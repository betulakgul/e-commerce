const productsContainer = document.getElementById("product-list");

export function product1() {
  const config = {
   /*type: "carousel", */ //ürün bitiminde aynı ürünleri tekrar tekrar göstermesi için, 
   // biz sildik çünkü tekrar aynılarını görmek istemedik
    perView: 4,
    gap: 20,
    /*autoplay: 3000 */
    bound: true, /**ürün bitiminde tekrar başa sarması için */
    breakpoints: {
      /*responsive */
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

    productsContainer && new Glide(".product-carousel", config).mount();
}

  const config2 = {
    type: "carousel",
    perView: 4,
    gap: 20,
    /*autoplay: 3000 */
    
    breakpoints: {
      /*responsive */
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productsContainer && new Glide(".product-carousel2", config2).mount();

export function singleThumbs(){
  const config3 = {
  perView: 5,
  breakpoints: {
    992: {
      perView: 3,
    }
  },
};


if (document.querySelector('.product-thumb')) {
  new Glide('.product-thumb',config3).mount();
}

}