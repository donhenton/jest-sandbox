(function ($) {
  'use strict';
  /* eslint no-invalid-this: 0 */

  $.fn.createTest = function () {
    return this.each(function () {
       
      this.testItem = new TestItem($(this));
    });
  };



  $('document').ready(function () {
     
    $('.sample').createTest();
  });

  function TestItem($element) {
     
      $element.text('fred');
      
    
  }


})(jQuery);
