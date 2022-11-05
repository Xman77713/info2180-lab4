$(document).ready(function() {
	$('.button').click(function(e){
		e.preventDefault();
		fetch('superheroes.php')
			.then(response => response.text())
			.then(data => {
				alert(data);
			})
			.catch(error => {
				alert(error);
			});
		//$.ajax("superheroes.php").done(function(result) {
			
		//})
	});
});