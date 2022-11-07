$(document).ready(function() {
	$('.button').click(function(e){
		
		e.preventDefault();
		
		let input = $(this).prev().val().trim(); //get value from input field
		console.log(input);
		
		const httpRequest = new XMLHttpRequest();
		let url = "superheroes.php?query="+input;
		httpRequest.onreadystatechange = doSomething;
		httpRequest.open('GET', url);
		httpRequest.send(); //AJAX REQUEST
		
		function doSomething() {
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200) {
					let response = httpRequest.responseText;
					console.log(response);
					$('#result').html(response); //modify innerHTML of the result <div>
				}
				else {
					alert('There was a problem with the request.');
				}
			}
		}
	});
});