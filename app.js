$(document).ready(function(){
	$('.give').click(function(){
		animateProgressBar($("input[type='number']").val());
	});

	var width = $( '.progress-bar' ).css( "width" );

	function animateProgressBar(currentPercentage){
		$('.progress-bar').animate({
			'width': (350 * currentPercentage) / 1000
		}, {
			duration: 1000,
			step: function(now){
				$('.progress-bar').text(Math.ceil(((now/350) * 100)) + '%');
			}
		});
	}



});

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

