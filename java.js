function date()
{
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
		
	// add 0 to time and date
	if (day<10)
	{
		day = '0' + day;
	}
	
	if (month<10)
	{
		month = '0' + month;
	}

	if (hour<10)
	{
		hour = '0' + hour;
	}
	
	if (minute<10)
	{
		minute = '0' + minute;
	}
	
	if (second<10)
	{
		second = '0' + second;
	}

	var godzina = document.getElementById('watch');
	var data = document.getElementById('date');

	godzina.innerHTML = hour + ':' + minute + ':' + second;
	data.innerHTML = day + '/' + month + '/' + year;
	
	setTimeout(date, 1000);
}

date();

function hey() {
	var today = new Date();
	var hour = today.getHours();
	
	if (hour >= 0 && hour <6)
	{
		document.getElementById('greetings').innerHTML = "Dobrej nocy!";
	}
	if (hour >= 6 && hour <=12)
	{
		document.getElementById('greetings').innerHTML = "Miłego dnia!";
	}
	else if (hour > 12 && hour < 19)
	{
		document.getElementById('greetings').innerHTML = "Miłego popołudnia!";
	}
	else if (hour >= 19 && hour <= 24)
	{ 
		document.getElementById('greetings').innerHTML = "Dobrej nocy!";
	}
}

hey();

function welcome() {
	var today = new Date();
	var hour = today.getHours();
	
	if (hour >= 0 && hour <6)
	{
		document.getElementById('welcome').innerHTML = "Witaj!";
	}
	if (hour >= 6 && hour <=12)
	{
		document.getElementById('welcome').innerHTML = "Dzień dobry!";
	}
	else if (hour > 12 && hour < 19)
	{
		document.getElementById('welcome').innerHTML = "Witaj!";
	}
	else if (hour >= 19 && hour <= 24)
	{ 
		document.getElementById('welcome').innerHTML = "Dobry Wieczór!";
	}
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("photos");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3750); // Change image every 3.75 seconds
}