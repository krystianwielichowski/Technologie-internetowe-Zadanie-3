$(document).ready(function () {
	function sprawdzEmail(email){
		var wzorEmail = /^(.[A-Za-z0-9\-]*\w)+@+([A-Za-z0-9\-]*\w)+(\.[A-Za-z]*\w)+$/;
		var Wynik = email.match(wzorEmail);
	
		if (Wynik == null)
		{
			alert("Proszę wpisać poprawny adres e-mail!");
			$('#email').css("background-color", "#FFC999");
			return false;
		}
			return true;
	}

	function czyPelne(imie, nazwisko, email, wiadomosc){
		licznik = 4;
		$('#imie').css("background-color", "white");
		$('#nazwisko').css("background-color", "white");
		$('#email').css("background-color", "white");
		$('#wiadomosc').css("background-color", "white");
		
		if (imie == ""){
			$('#imie').css("background-color", "#FFC999");
			licznik = licznik - 1;
		}
		if (nazwisko == ""){
			$('#nazwisko').css("background-color", "#FFC999");
			licznik = licznik - 1;
		}
		if (email == ""){
			$('#email').css("background-color", "#FFC999");
			licznik = licznik - 1;
		}
		if (wiadomosc == ""){
			$('#wiadomosc').css("background-color", "#FFC999");
			licznik = licznik - 1;
		}
		if (licznik < 4){
			alert("Proszę wypełnić wszystkie pola.")
			return false;
		}else{
			return true;
		}
	}


	function wyslij(){
		var imie = document.getElementById("imie").value;
		var nazwisko = document.getElementById("nazwisko").value;
		var email = document.getElementById("email").value;
		var wiadomosc = document.getElementById("wiadomosc").value;
		
		
		if (czyPelne(imie, nazwisko, email, wiadomosc) && sprawdzEmail(email)){
			alert("Dzięki! Wiadomość wysłana!");
		}
	};
	
	$("#wyslij").click(function(){
		console.log("trtrtr");
		wyslij();
	})
});