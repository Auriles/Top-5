$(document).ready(function(){

var $mainMenuItems = $("#main-menu ul").children("li");
var totalMainMenuItems = $mainMenuItems.length;
var openedIndex = -1;

var init = function () {
  $mainMenuItems.children(".images").click(function()  {

    var newIndex = $(this).parent().index();
    var $item = $mainMenuItems.eq(newIndex);

    if(openedIndex === newIndex) {
      animateItem($item, false, 250);
      openedIndex = -1;
    } else {
      if(validIndex(newIndex)) {
        animateItem($mainMenuItems.eq(openedIndex), false, 250);
        openedIndex = newIndex;
        animateItem($item, true, 250);
      }
    }

  });
};

var validIndex = function(indexToCheck) {
  return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
};

var animateItem = function($item, toOpen, speed) {

  var $colorImage = $item.find(".color");
  var itemParam = toOpen ? {width : "420px"}:{width : "140px"};
  var colorImageParam = toOpen ? {left : "0px"}:{left : "140px"};

  $colorImage.animate(colorImageParam, speed);
  $item.animate(itemParam, speed);

};

init();





});
