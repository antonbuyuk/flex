$(document).ready(function() {
	$('.nav-item').click(function() {
		$('.nav-item').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.filters_nav-item').click(function() {
		$('.filters_nav-item').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.burger').click(function(event) {
		$('.nav').slideToggle('fast')
	});
	$('.block-title').click(function(event) {
		$('.filters_nav').slideToggle('fast')
	});
});

/*Filters*/
$(document).ready(function() {
	$('.filters_nav-item').click(function(event) {
		$('.article').css('display', 'none');

		$('.article').each(function() {
			var active = $('.filters_nav-item.is-active').data('index');
			if ($(this).data('filer').indexOf(active) + 1) {
				$(this).css('display', 'block');
			}
		});
	});
});