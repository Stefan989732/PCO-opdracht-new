// buttons for showing and hiding the answers to the questions
function show() {
	if (document.getElementById('question1').style.display == 'none')
		document.getElementById('question1').style.display = 'block';
	else
		document.getElementById('question1').style.display = 'none';
}

function show2() {
	if (document.getElementById('question2').style.display == 'none')
		document.getElementById('question2').style.display = 'block';
	else
		document.getElementById('question2').style.display = 'none';
}

function show3() {
	if (document.getElementById('question3').style.display == 'none')
		document.getElementById('question3').style.display = 'block';
	else
		document.getElementById('question3').style.display = 'none';
}
function show4() {
	if (document.getElementById('question4').style.display == 'none')
		document.getElementById('question4').style.display = 'block';
	else
		document.getElementById('question4').style.display = 'none';
}

function show5() {
	if (document.getElementById('question5').style.display == 'none')
		document.getElementById('question5').style.display = 'block';
	else
		document.getElementById('question5').style.display = 'none';
}

function show6() {
	if (document.getElementById('question6').style.display == 'none')
		document.getElementById('question6').style.display = 'block';
	else
		document.getElementById('question6').style.display = 'none';
}

function show7() {
	if (document.getElementById('question7').style.display == 'none')
		document.getElementById('question7').style.display = 'block';
	else
		document.getElementById('question7').style.display = 'none';
}


// buttons for the progress bar
function detailsYearOne() {
	let EC = document.getElementById("bar_year_one").value;
	document.getElementById("EC_year_one").innerHTML = EC + " EC";
}

function detailsYearTwo() {
	let EC_second = document.getElementById("bar_year_two").value;
	document.getElementById("EC_year_two").innerHTML = EC_second + " EC";
}

function detailsYearThree() {
	let EC_third = document.getElementById("bar_year_three").value;
	document.getElementById("EC_year_three").innerHTML = EC_third + " EC";
}

function detailsYearFour() {
	let EC_fourth = document.getElementById("bar_year_four").value;
	document.getElementById("EC_year_four").innerHTML = EC_fourth + " EC";
}