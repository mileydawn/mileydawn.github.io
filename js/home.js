$(document).ready(function(){
  
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu 
  // $header_top.find('a').on('click', function() {
  //   $(this).parent().toggleClass('open-menu');
  // });



  // fullpage customization
  $('#fullpage').fullpage({
    // sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      $(".bg-wrapper").attr("data-bg",index);
      
    },

    onLeave: function(anchorLink, index, slideIndex, direction) {
      console.log(index);
      $(".bg-wrapper").attr("data-bg",index);
    }
  }); 
});

