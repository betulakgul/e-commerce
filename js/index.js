//! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function () {
  /*tıklandığında olay olsun */
  sidebar.style.left = "0";
  /**style ile css özelliği ekleyebildik, left normalde -100 dü ve saklamış oluyorduk
   *  sidebar a tıklandığında left 0 olsun ki tekrar saklandığı yerden çıksın */
});
btnCloseSidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%"; /**sidebar kapanacak */
});

/* click outside start */
document.addEventListener("click", function (event) {
  /**document o sayfanın html ini verir */
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    /**sidebar alanını içermeyen kısım ve sidebar butonu hariç (! koyduğumuz için içeren değil anlamına gelir) */
    sidebar.style.left =
      "-100%"; /**içermeyen kısımlara tıklandığında sidebar kapanacak */
  }
});
/* click outside end */
//! home sidebar end

//! search modal start
const btnOpenSearch = document.querySelector(".search-button");
const btnCloseSearch = document.getElementById("close-search"); // getElementById yazdığımız için başına # koymadık
const modalSearch = document.getElementsByClassName("modal-search"); //getElementsByClassName yazdığımız için başına . koymadık
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

console.log(modalSearch);

btnOpenSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "visible"; //modalSearch bize array döndürdüğü için 0. elemanını aldık
  modalSearch[0].style.opacity = "1";
});

btnCloseSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "hidden";
  modalSearch[0].style.opacity = "0";
});

/** click outside start */
document.addEventListener("click", function (e) {
  if (
    !e.composedPath().includes(modalSearchWrapper[0]) &&
    !e.composedPath().includes(btnOpenSearch)
  ) // bu butonları içermiyorsa kapansın
  {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
  }
});

//! search modal end

//! slider start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000); //4 snde bir geçiş yap
function plusSlide(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //replace: solda yazılanı sağdaki ile değiştir yani active yazısını sil
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
//! slider end
