$(function(){

	$('#random').on('click', function(e){
		e.preventDefault();

		$.get('/numbers', function(numbers) {
			
			$('#numbers').append(numbers.map(function(n) {
				return $('<li>').text(n);
			}));
			// console.log('that data is: ', data)
		});
	});

	$('.submit').on('click', function(e){
		e.preventDefault();
			var num = $('.info').val()
			console.log(num)
		$.post('/add', {data: num} , function(numbers) {
			
			$('#data').append(numbers);
		});
	});	
});

// console.log('This is working')