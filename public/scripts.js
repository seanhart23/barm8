console.log('Scripts are running')

$(document).ready(function(){
  sectionHeight1 = $("#section-1").height();
  sectionHeight2 = $("#section-2").height();
  sectionHeight3 = $("#section-3").height();
  sectionHeight4 = $("#section-4").height();
  divisor        = document.getElementById("divisor")
  divisor1       = document.getElementById("divisor1")
  divisor2       = document.getElementById("divisor2")
  slider         = document.getElementById("slider")
  slider1        = document.getElementById("slider1")
  slider2        = document.getElementById("slider2")
  $el            = $('#divisor');   
  bottom         = $el.position().top + $el.outerHeight(true)
  offsetBottom   = $el.offset().top + $el.outerHeight(true)
  space          = offsetBottom - bottom
  s2             = sectionHeight2 + bottom + space
  s3             = sectionHeight2 + sectionHeight3 + bottom + space
})

$(document).scroll(()=>{
  scroll = $(document.scrollingElement).scrollTop();
  $('nav').toggleClass('nav-scrolled', $(this).scrollTop() > 100);
  $('.nav-item a').toggleClass('nav-link-alt', $(this).scrollTop() > 100);
  $('.navbar-brand').toggleClass('navbar-brand-alt', $(this).scrollTop() > 100);
  $('.navbar-nav').toggleClass('navbar-nav-alt', $(this).scrollTop() > 100);
  $('.jwpVBP').toggleClass('white', scroll > (sectionHeight1/2));
  $('.bullet1').toggleClass('active', scroll > -1 && scroll < sectionHeight1);
  $('.bullet2').toggleClass('active', scroll > sectionHeight1 && scroll < (sectionHeight1 + (sectionHeight2/2)));
  $('.bullet3').toggleClass('active', scroll > (sectionHeight1 + (sectionHeight2/2)) && scroll < (sectionHeight1 + sectionHeight2 + (sectionHeight3/2)));
  $('.bullet4').toggleClass('active', scroll > (sectionHeight1 + sectionHeight2 + (sectionHeight3/2)));

  if(scroll > 0 && scroll < space){
      slider.value = "0%"
      slider1.value = "0%"
      slider2.value = "0%"
  } else if(scroll > space && scroll < (space + bottom)){
      slider.value = ((scroll - space)/bottom)*100;
      divisor.style.height = slider.value+"%";
  } else if(scroll > (space + bottom) && scroll < s2) {
      divisor.style.height = "100%";
      slider1.value = ((scroll - sectionHeight2 - space)/bottom)*100;
      divisor1.style.height = slider1.value+"%";
  } else if(scroll > s2 && scroll < s3){
      divisor.style.height = "100%";
      divisor1.style.height = "100%";
      slider2.value = ((scroll - sectionHeight2 - sectionHeight3 - space)/bottom)*100;
      divisor2.style.height = slider2.value+"%";
  } else if(scroll > s3){
      divisor.style.height = "100%";
      divisor1.style.height = "100%";
      divisor2.style.height = "100%";
  }
})

