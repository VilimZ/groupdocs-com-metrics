$((function(){$(window).on("scroll",(function(){var dfd;console.log($(this).scrollTop()),$(this).scrollTop()>50&&($(this).off("scroll"),dfd=$(".stat-number").map((function(i,el){var props={from:{count:0},to:{count:parseInt(this.dataset.n,10)}};return $(props.from).animate(props.to,{duration:3e3,step:function(now,fx){$(el).text(Math.ceil(now))},complete:function(){void 0!==el.dataset.sym&&(el.textContent=el.textContent.concat(el.dataset.sym))}}).promise()})).toArray(),$.when.apply($,dfd))}))}));

$('.testimonial-slider').slick({
dots: false,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 1,
arrows: true,
prevArrow: $('.scrollprev'),
nextArrow: $('.scrollnext'),
centerPadding: '0px',
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});


$(window).on('load', function(){$('body').addClass('visiblebody')});
$('.togglebtn').on('click', function(){
    $('.togglebtn').toggleClass('btnshow');
    $('.col-menuitem').toggleClass('showtopmenu');
});
$(document).ready((function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$(".mobileanchor").attr("href","#")}))
