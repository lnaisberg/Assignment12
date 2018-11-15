$(document).ready(function() {

	var slideIndex = 1;
	showSlides(slideIndex);

	function showSlides(n) {
		
		var slides = $(".mySlides");
		var dots = $(".dot");

		if (n > slides.length) {
			slideIndex = 1;
		} 
    	if (n < 1) {
    		slideIndex = slides.length;
    	}	
		for (var i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	    }
	    for (var i = 0; i < dots.length; i++) {
	        dots[i].className = dots[i].className.replace(" active", "");
	    }

	    slides[slideIndex-1].style.display = "inline-block"; 
	    dots[slideIndex-1].className += " active";
  	}

  	$(".prev").click(function(){
 	    slideIndex -= 1;
   		showSlides(slideIndex);
  	});
  	
  	$(".next").click(function(){
  		slideIndex += 1;
  		showSlides(slideIndex);
  	});

  	$(".dot").click(function(){
  		var index = $(".dot").index(this);
  		slideIndex = index + 1;
  		showSlides(slideIndex);
  	});

  	var newVariable;
  	var temp;

	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
        dataType: "JSON",
        data: {
        	q: "Paris",
        	units: "imperial",
        	appid: "86fd9aa682f4a90c7f5e8deb1b40dfff"
        },
        success: function(data) {
			//var weather = data.list[0].weather.main;
   			var temp = data.list[0].main.temp;
        	//$("#two.1").html(weather);
        	var place = "#four.1";
            $(place).html("Current Temperature: <br>" + temp + " \xB0F");
            styleTemp(temp, place);
            console.log(temp);

        },
        error: function(data, textStatus, errorThrown) {
        	console.log("error");
            console.log(errorThrown);
        }
		
	})

	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
        dataType: "JSON",
        data: {
        	q: "London",
        	units: "imperial",
        	appid: "86fd9aa682f4a90c7f5e8deb1b40dfff"
        },
        success: function(data) {
            //var weather = data.list[0].weather.main;
   			var temp = data.list[0].main.temp;
        	//$("#two.2").html(weather);
        	var place = "#four.2"
            $(place).html("Current Temperature: <br>" + temp + " \xB0F");
            styleTemp(temp, place);
        },
        error: function(data, textStatus, errorThrown) {
        	console.log("error");
            console.log(errorThrown);
        }	
	})

	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
        dataType: "JSON",
        data: {
        	q: "Barcelona",
        	units: "imperial",
        	appid: "86fd9aa682f4a90c7f5e8deb1b40dfff"
        },
        success: function(data) {
            //var weather = data.list[0].weather.main;
   			var temp = data.list[0].main.temp;
        	//$("#two.3").html(weather);
        	var place = "#four.3";
            $(place).html("Current Temperature: <br>" + temp + " \xB0F");
            styleTemp(temp, place);
        },
        error: function(data, textStatus, errorThrown) {
        	console.log("error");
            console.log(errorThrown);
        }	
	})

	function styleTemp(temp, place){
		if (temp < 32){
	    	$(place).css("background-color", "#a4cff2");
	    } 
	    else if ((temp > 32) && (temp < 40)){
	    	$(place).css("background-color", "#91d6c5");
	    }
	    else if ((temp > 40) && (temp <= 55)){
	    	$(place).css("background-color", "#ade8a7");
	    }
	    else if ((temp > 55) && (temp <= 63)){
	    	$(place).css("background-color", "#e6f2ba");
	    }
	    else if ((temp > 63) && (temp <= 70)){
	    	$(place).css("background-color", "#ffb560");
	    }
	    else if ((temp > 70) && (temp <= 79)){
	    	$(place).css("background-color", "#e88851");
	    }
	    else if (temp > 79){
	    	$(place).css("background-color", "#f25f48");
	    }

	}
	        



});