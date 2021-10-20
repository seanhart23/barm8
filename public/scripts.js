console.log('Scripts are working')

// $(window).scroll(function() {
//     if ($(this).scrollTop()<700){
//         $('#screenshot-2').css({height: '0px'});
//      }
//     else{
//         $('#screenshot-2').css('height', (this).scrollTop())
//      }
//  });

$(document).scroll(()=>{
  scroll=$(document.scrollingElement).scrollTop();
  $("#image2").css("padding-top", '275%');
  if(scroll > 115){
    $("#image2").css("padding-top", (200 - (scroll/115)*30)+'%');
    console.log(((scroll/115)*10)+'%')
  } else if(scroll > 912) {
    $("#image3").css("height", '100%');
  } else {
    $("#image2").css("height", '0%');
    $("#image3").css("height", '0%');
  }
});
