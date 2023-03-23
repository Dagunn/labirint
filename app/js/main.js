

$(document).ready(function () {
  $('.slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: `
    <svg class="arrow-pre" width="32" height="32">
        <use xlink:href="images/svg-sprite/icons.svg#arrow-pre"></use>
    </svg>`,
    nextArrow: `
    <svg class="arrow-next" width="32" height="32">
        <use xlink:href="images/svg-sprite/icons.svg#arrow-next"></use>
    </svg>`,
    responsive: [

      {
        breakpoint: 1058,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.js-favorite').on('click', function(e)
  {
    if(e.currentTarget.firstElementChild.attributes[0].value == "images/svg-sprite/icons.svg#heart")
    {
      e.currentTarget.firstElementChild.attributes[0].value = "images/svg-sprite/icons.svg#heart-red";
    }
    else
    {
      e.currentTarget.firstElementChild.attributes[0].value = "images/svg-sprite/icons.svg#heart";
    
    }
  })

  $('.js-button').click(function(){
    if($(this).hasClass('remove')) {
      $(this).removeClass('remove').html('В корзину')
    } else {
      $(this).addClass('remove').html('Удалить')
    }
  });
});


