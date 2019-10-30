// Add new Todo
$('input[type=text]').on('keypress', function(event) {
  if(event.which === 13) {
    let newItemText = $(this).val();
    $(this).val('');
    $('ul').append(`<li>${newItemText} <span><i class="fas fa-trash"></i></li>`);
  }
});
// Check of Todo
$('ul').on('click', 'li', function() {
  $(this).toggleClass('complete');
});
// Delete Todo
$('ul').on('click', 'span', function(event) {
  event.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });  
});
// Hide input
$('.fa-pencil-alt').click(() => {
  $('input[type=text]').fadeToggle();
});