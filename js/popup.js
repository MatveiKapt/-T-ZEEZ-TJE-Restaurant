/* Opened/Closed window */

const modal = document.querySelector('.reserve-modal');
const modalOpenButton = document.querySelector('.preview__button');
const modalCloseButton = modal.querySelector('.reserve-modal__close-button');
const reserveForm = modal.querySelector('.reserve-form');
const clientName = reserveForm.querySelector('[name=client-name]');

modalOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('reserve-modal--show');
  clientName.focus();
});

modalCloseButton.addEventListener('click', function () {
  modal.classList.remove('reserve-modal--show');
});

/* Ajax submit */

$(".reserve-form").submit(function(evt) {
  $.ajax({
    type: "POST",
    url: "post.php",
    data: $(".reserveForm").serialize()
  }).done(function() {
    console.log("okay");
  }).fail(function() {
    console.log("fail");
  });
  evt.preventDefault();
})
