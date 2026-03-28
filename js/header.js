function sidebarFunc(){
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

}

function searchModalFunc(){
  //! search modal start
const btnOpenSearch = document.querySelector(".search-button");
const btnCloseSearch = document.getElementById("close-search"); // getElementById yazdığımız için başına # koymadık
const modalSearch = document.getElementsByClassName("modal-search"); //getElementsByClassName yazdığımız için başına . koymadık
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

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
}

function headerFunc(){
  sidebarFunc();
  searchModalFunc();

}

export default headerFunc();