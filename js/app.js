new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const burger = document.querySelector('.menu-burger');
const menuBurger = document.querySelector('.menu-burger_list');
const burgerClose = document.querySelector('.menu-burger_list .menu-burger_close');
const modalButton = document.querySelector('.reserve-button');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close')

burger.addEventListener('click', function() {
  menuBurger.classList.add('show')
  console.log(menuBurger.classList.contains('show'))
})

burgerClose.addEventListener('click', function(e){
  e.stopPropagation()
  menuBurger.classList.remove('show')
  console.log('asd')
})

modalButton.addEventListener('click', function() {
  modalWindow.classList.add('show_modal')
})

modalClose.addEventListener('click', function() {
  modalWindow.classList.remove('show_modal')
})


// send form by ajax

// $('#modal-form').submit(function(){
// 	$.post(
// 		'post.php', // адрес обработчика
// 		 $("modal-form").serialize(), // отправляемые данные  		
		
// 		function(msg) { // получен ответ сервера  
// 			$('modal-form').hide('slow');    
// 			$('#my_message').html(msg);
// 		}
// 	);
// 	return false;
// });