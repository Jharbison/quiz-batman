$(document).ready(function(){
	$('#welcome-box').show(1000);
	
	


	var q0 = {
		q: "Who is Batman's secret identity?",
		a: ["Clark Kent", "James Gordon", "Bruce Wayne", "Dick Grayson"],
		ca: 2	
	}

	var q1 = {
		q: "In which comic book did Batman first appear?",
		a: ["Batman #1", "Detective Comics #1", "The Dark Knight #3", "Detective Comics #27"],
		ca: 3
	}

	var q2 = {
		q: "Which one is NOT a nickname for Batman?",
		a: ["The Dark Knight", "World's Greatest Detective", "The Knightmare of Gotham", "The Caped Crusader"],
		ca: 2	
	}

	var q3 = {
		q: "Who created Batman?",
		a: ["Bob Kane", "Jerry Siegel", "Jack Kirby", "Joe Shuster"],
		ca: 0	
	}
	var q4 = {
		q: "When is Bruce Wayne's birthday?",
		a: ["February 19th", "March 15th", "July 10th", "June 6th"],
		ca: 0
	}

	var qCount = 0;
	var qCorrect = 0;
	var questions = [q0, q1, q2, q3, q4];

$('.begin-quiz').click(function(event){
	event.preventDefault();
	$('#welcome-box').hide();
	$('.question').show();
	$('.answers').show();
	$('.submit').show();
	displayQuestion();
	
});

function displayQuestion() {
	if(qCount >= questions.length) {
		$('.question').hide();
		$('.answers').hide();
		$('.submit').hide();
		$('#complete-box h2').html("Quiz Complete! You Scored " +qCorrect+ " out of " +questions.length);
		$('#complete-box').show();
		$('.try-again').show();
		console.log("Quiz is complete!");
	} else {
		currentQuestion = questions[qCount];
		$('.question').html(currentQuestion.q);
		var answerHtml = "";
		for (var i = 0; i < currentQuestion.a.length; i++) {
			answerHtml += "<li><button id="+i+">" +currentQuestion.a[i]+"</button></li>";
		}
		$('.answers').html(answerHtml);
	}
}

$('.answers').on('click','button',function(){
 $('button.checked').removeClass('checked');
 $(this).toggleClass('checked');
});



$('.submit').on('click',function() {
	var answer = $('button.checked').attr('id');
	if(answer == questions[qCount].ca) { 
		qCorrect++; 
		console.log("Correct");
	} else {
		console.log("That is not correct");
	}
	qCount++; displayQuestion();
});

$('.try-again').on('click', function() {
	console.log("try-again")
	tryAgain();
	});

	var tryAgain = function(){ 
	$('#complete-box').hide();
	$('#welcome-box').show();
	qCount = 0;
	qCorrect = 0;
}

});









