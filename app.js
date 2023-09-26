const body = document.querySelector("body");
const header = document.querySelector("header");
const ghostBox = document.querySelector(".ghost");
const showBtn = document.querySelector(".open_search_button");
const closeBtn = document.querySelector(".search_close_button");
const footerBtn = document.querySelector(".site_now");
const footerList = document.querySelector(".relate_site");
const bodyTop = document.querySelector("body");

function btnEvent(){
    closeBtn.classList.toggle("show_drop");
    showBtn.classList.toggle("show_drop");
    body.classList.toggle("scroll_lock");
    header.classList.toggle("search_active");
    ghostBox.classList.toggle("active");
}
// $(".open_search_button").click(function(){
//     $(".search_close_button").toggleClass("show_drop")
// })
showBtn.addEventListener("click", function(){
    btnEvent();
})

closeBtn.addEventListener("click", function(){
    btnEvent();
})

footerBtn.addEventListener("click", function(){
    footerList.classList.toggle("active");
})