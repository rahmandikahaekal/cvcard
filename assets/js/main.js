(function($) {
    'use strict';
    
    $(document).ready(function() {
      //Set the carousel options
      $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
      });
    });

    var originalTitle, currentItem;

	$('.media-popup').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {

				// modify item title to include description
				currentItem = $(this.items)[this.index];
				originalTitle = currentItem.title;
				currentItem.title = '<h3>' + originalTitle + '</h3>' + '<p>' + $(currentItem).parents('.work-item').find('img').attr('alt') + '</p>';

				// adding animation				
				this.st.mainClass = 'mfp-fade'; 
			},
			close: function() {
				currentItem.title = originalTitle; 
			}
		}
		
	});
    
})(jQuery);

