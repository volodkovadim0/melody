$(document).ready(function (  ){
  let currentFloor=2;
  let floorPath=$(".home-image path");
  let counterUp=$(".arrow-up");
  let counterDown=$(".arrow-down");
  floorPath.on("mouseover",function (  ){
    currentFloor=$(this).attr("data-floor");
    floorPath.removeClass("current-floor");
    $(".counter").text(currentFloor);
  });


  counterUp.on("click", function (  ){
    if(currentFloor<18){
      currentFloor++;
      let usCurrentFloor=currentFloor.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function (  ){
    if(currentFloor>2){
      currentFloor--;
      let usCurrentFloor=currentFloor.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  let modal=$(".modal");
  floorPath.on("click",function (  ){
    modal.toggleClass("is-open");
    $(function(){
      $(".flat-number").each(function(index, elem){
        console.log((index + 1)+(currentFloor-2)*10);
        elem.innerHTML=(index + 1)+(currentFloor-2)*10;
      });
    });
  });

  let closeModalBtn=$(".modal-close-button");
  closeModalBtn.on("click",function (  ){
    modal.toggleClass("is-open");
  });

let viewFlatsButton=$(".view-flats");
viewFlatsButton.on("click",function (  ){
  modal.toggleClass("is-open");
  $(function(){
    $(".flat-number").each(function(index, elem){
      console.log((index + 1)+(currentFloor-2)*10);
      elem.innerHTML=(index + 1)+(currentFloor-2)*10;
    });
  });
});

  let flatPath=$(".flats path");
  let listItem=$(".flat-link");
  let currentFlat="01";
  listItem.on("mouseenter", function (  ){
    currentFlat=$(this).attr("data-flat");
    flatPath.removeClass("current-flat");

    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    listItem.removeClass("current-flat");
  });


  flatPath.on("mouseover",function (  ){
    currentFlat=$(this).attr("data-flat");

    listItem.removeClass("current-flat");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    flatPath.removeClass("current-flat");
  })



});