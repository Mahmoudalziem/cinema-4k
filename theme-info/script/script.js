var mySearch = document.querySelector(".search"),
    
    myClose = document.querySelector(".search-click"),
    
    myForm = document.querySelector(".search-films-series");

mySearch.onclick = function() {
    myForm.classList.add("active");
}
myClose.onclick = function (){
    "use strict";
    myForm.classList.remove("active");
}
$(document).ready(function(){
    $("html").scroll(function(){
        if(scrollY >= 60){
         $("div.head").css({
             "backgroundColor" : "black",
             zIndex : "134634",
         })
        }
         else{
            $("div.head").css( {
                 "backgroundColor" :"transparent",
             })
         }
             console.log("hello");
    })
    
});