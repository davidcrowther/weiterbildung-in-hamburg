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
   


    $('form#mainform').validate({
      rules: {
        email: {
          minlength: 2,
          required: true,
          email: true
        },  
        // checkbox1: {
        //   required: true
        // },  
        // checkbox2: {
        //   required: true
        // },  
        input1: {
          minlength: 1,
          number: true,
          required: true
        },  
        input2: {
          minlength: 1,
          number: true,
          required: true
        },  
        // checkbox4: {
        //   required: true
        // },  
        // checkbox5: {
        //   required: true
        // },  
        somename: {
          minlength: 2,
          required: true
        },  
        surname: {
          minlength: 2,
          required: true
        },  
        phonenumber: {
          minlength: 2,
          required: true
        }
        // ,  
        // checkbox7: {
        //   required: true
        // },  
        // checkbox8: {
        //   required: true
        // },  
        // checkbox9: {
        //   required: true
        // }

      },
      // errorLabelContainer: '.errorTxt',
      highlight: function(label) {
        // $(label).closest('.form-control').addClass('has-error');
      },
      success: function(label) {
        // $(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

      }, 
      errorPlacement: function(error, element) {
          var placement = $(element).closest('.form-group');
          $(placement).append(error)
          // if (placement) {
          // } else {
          //     error.insertAfter(element);
          // }
      },
      messages: { 
       email: {
         email: "Your email address must be in the format of 'email@yourdomain.com'"
        }
      }
    });



});