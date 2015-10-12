$(document).ready(function() {
  
   $('section.page-header').anystretch("img/mountains.jpg", {speed: 150}); 
   $('article.yellow-section').anystretch("img/yellow-bg.png", {speed: 150}); 
   $('article.evening').anystretch("img/bg-2.jpg", {speed: 150}); 

   $("a.answer-link").popover({
    html: true,
    placement: 'left auto',
    animation: true ,
    // content: '<ul class="list-group"> <li class="list-group-item">There is</li> <li class="list-group-item">It is</li> <li class="list-group-item">There are</li> <li class="list-group-item">There be</li> </ul>',
    trigger: 'click'
   });

   $(document).on('click', 'a.answer-link', function(event) {
     event.preventDefault();
   });

   $(document).on('click', '.popover-content ul li', function(event) {
      var this_text = $(this).html();
      var this_id = $(this).parent().parent().parent().find('h3.popover-title').text();
      var this_input = $(this).data('value');
      var this_input_name = $(this).closest('ul').data('input');
      $(this_id).text(this_text);
      $(this).parent().parent().parent().removeClass('in').css('display','none');
      $('input[name='+this_input_name+']').val(this_input);
      // console.log(this_input);

      return false;        
   });

   $(document).on('click', 'article.submit-form form .btn', function(event) {
    $('.hidden-content').removeClass('hide');
    $('.visible-content').addClass('hide');
   });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  $('html').on('mouseup', function(e) {
      if(!$(e.target).closest('.popover').length) {
          $('.popover').each(function(){
              $(this.previousSibling).popover('hide');
          });
      }
  });
      
});