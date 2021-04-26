$(function () {
  let header = $('#header')
  let intro = $('#intro')
  let introH
  let scrollPos = $(window).scrollTop()
  let nav = $('#nav')
  let navToggle = $('#navToggle')

  $(window).on('scroll load resize', function () {
    introH = intro.innerHeight()
    scrollPos = $(this).scrollTop()

    console.log(introH)

    if (scrollPos > introH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }

    // console.log(scrollPos)
  })
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault()

    let elementId = $(this).data('scroll')
    let elementOffset = $(elementId).offset().top

    nav.removeClass('show')

    console.log(elementOffset)
    $('html, body').animate(
      {
        scrollTop: elementOffset - 70,
      },
      600
    )
  })

  navToggle.on('click', function (event) {
    event.preventDefault()
    nav.toggleClass('show ')
  })

  let slider = $('#testimonialsSlider')
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  })
})
