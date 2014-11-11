$(document).ready(function(){
	
	var strony = ["news.html", "ja.html", "linki.html", "galeria.html", "kontakt.html"];
	var przyciski = [$("#logo"), $("#ja"), $("#linki"), $("#galeria"), $("#kontakt")];
	
	var aktualnaStrona = 0;
	var poprzedniaStrona = 0;
	
	function podajIndex(tablica, element){
		for (var i=0; i< tablica.length; i++){
			if (element == tablica[i]){
				return i;
			};
		};
		return -1;
	};
	
	var zaladuj = function(przycisk) {
		$("#mid").hide(100); 
		
		poprzedniaStrona = aktualnaStrona;
		aktualnaStrona = podajIndex(przyciski, przycisk);
		
		var popIndex = podajIndex(strony, poprzedniaStrona);
		
		
		$("#mid").load(strony[aktualnaStrona]);
		$("#mid").show(1000);
		
		//usuwanie klasy .menuWl z poprzedniego wyboru
		
		if (poprzedniaStrona > 0){
			przyciski[poprzedniaStrona].removeClass("menuWl");
			przyciski[poprzedniaStrona].addClass("menu");
		};
		
		//dodanie klasy .menuWl
		if (aktualnaStrona > 0){
				przyciski[aktualnaStrona].removeClass("menu");
				przyciski[aktualnaStrona].addClass("menuWl");
		};
	};
	
	
	$("#mid").load(strony[0]);
	
	przyciski[0].click(function(){
		zaladuj(przyciski[0])
	});
	przyciski[1].click(function(){
		zaladuj(przyciski[1])
	});
	przyciski[2].click(function(){
		zaladuj(przyciski[2])
	});
	przyciski[3].click(function(){
		zaladuj(przyciski[3])
	});
	przyciski[4].click(function(){
		zaladuj(przyciski[4])
	});
	
	
	

	
	
	if ($(document).height() < 600){
		$("#bot").css("position", "absolute");
		$("#bot").css("bottom", 0);
		var szer = $(document).width() - 80;
		$("#bot").css("width", szer);
	}
});
