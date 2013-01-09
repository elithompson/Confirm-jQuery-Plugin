$(function () {
  // In its simplest usage, you can call confirm with no arguments. 
  // Because the default onConfirm action is to just return true, 
  // if you are confirming a button in a form, the form will submit 
  // after confirmation. 
  $('.form-confirm').confirm();

  // This uses selector so that the event can be bound to the document 
  // which allows for elements to be dynamically added to the page and still use the 
  // confirmation functions. Dynamically added elements aren't demonstrated here, but I 
  // hope you get the idea.
  $(document).confirm('.selector-confirm');

  // Here's a usage which shows off custom confirmation text and a custom method to react to the element's confirmation
  $('.alert-confirm').confirm({
    onConfirm: function (event) {
      event.preventDefault();
      $(this).html('<strong>Trololololol!</strong>');
    },
    confirmationText: 'Polo'
  });

  // When rearm is set to true, the button can continue to be confirmed.
  var count = 0;
  $(document).confirm({
    rearm: true,
    selector: '.rearm-confirm',
    onConfirm: function (event) {
      $(this).text('Confirmed: ' + (++count));
    }
  });
});