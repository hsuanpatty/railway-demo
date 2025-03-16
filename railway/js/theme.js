$('.products-list').owlCarousel({
	loop: true,
	dots: true,
	margin: 10,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		767: {
			items: 1
		},
	}
})


//其它連到對應區塊
$(document).ready(function () {
	//其它連到對應區塊
	$("a").on("click", function () {
	  var hrefLink = $(this).attr("href");
	  console.log(hrefLink);
	  $("html,body").animate(
		{
		  scrollTop: $(hrefLink).offset().top 
		},
		800
	  );
	});
  });


//輪播
$('.test_active_1').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1500,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  arrows: false,
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 1,
		  arrows: false,
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  arrows: false,
		}
	  },
	]
  });  
 

  $('.test_active_2').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1500,
	arrows: true,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  arrows: false,
		  autoplay: true,
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 1,
		  arrows: false,
		  autoplay: true,
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  arrows: false,
		  autoplay: true,
		}
	  },
	]
  });  
 

  document.addEventListener('DOMContentLoaded', function () {
	const items = document.querySelectorAll('.card');
	let current = 0;
	const total = items.length;
  
	items[0].classList.add('active');
  
	// Navigation functions
	function setSlide(prev, next) {
	  if (next >= total) next = 0;
	  if (next < 0) next = total - 1;
	  
	  items[prev].classList.remove('active');
	  items[next].classList.add('active');
	  
	  current = next;
	}
  
	document.getElementById('moveRight').addEventListener('click', function () {
	  const prev = current;
	  const next = current + 1;
	  setSlide(prev, next);
	});
  

	document.getElementById('moveLeft').addEventListener('click', function () {
	  const prev = current;
	  const next = current - 1;
	  setSlide(prev, next);
	});
  
	let touchStartX = 0;
	let touchEndX = 0;
  
	const cardCarousel = document.querySelector('.card-carousel');
  
	cardCarousel.addEventListener('touchstart', function (event) {
	  touchStartX = event.changedTouches[0].screenX;
	});
  
	cardCarousel.addEventListener('touchmove', function (event) {
	  touchEndX = event.changedTouches[0].screenX;
	});
  
	cardCarousel.addEventListener('touchend', function () {
	  if (touchEndX < touchStartX - 50) {
		const prev = current;
		const next = current + 1;
		setSlide(prev, next);
	  }
	  if (touchEndX > touchStartX + 50) {
		const prev = current;
		const next = current - 1;
		setSlide(prev, next);
	  }
	});
  });

// top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
	document.body.scrollTop > 20 ||
	document.documentElement.scrollTop > 20
  ) {
	document.getElementById("movetop").style.display = "block";
  } else {
	document.getElementById("movetop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// 字數
$(function(){
    var len = 15;
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});


// WOW 
  new WOW().init();






	



