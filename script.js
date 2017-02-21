$(document).ready(function(){

var $mainMenuItems = $("#main-menu ul").children("li");
var totalMainMenuItems = $mainMenuItems.length;
var openedIndex = -1;
var init = function () {
  $mainMenuItems.children(".images").click(function()  {
    var newIndex = $(this).parent().index();
    var $item = $mainMenuItems.eq(newIndex);
    var $colorImage = $item.find(".color");

    $colorImage.animate({
      left: "0px"
    }, 250);

    $item.animate({
      width: "420px"
    }, 250);

    openedIndex = newIndex;
  });
};

init();





});
