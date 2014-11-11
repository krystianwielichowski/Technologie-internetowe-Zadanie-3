$(document).ready(function () {
    var zdjecia = Array("http://img2.demotywatoryfb.pl//uploads/201303/1363352557_o2idds.jpg", 
	"http://img7.demotywatoryfb.pl//uploads/201305/1368046221_gh0j1z.jpg",
	"http://img3.demotywatoryfb.pl//uploads/201302/1361975851_ckb4kz.jpg",
	"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/10354726_750192835054244_2328852501860611339_n.jpg?oh=1e5ee03b1f15a4dcd2317455f1e3b660&oe=5519734A&__gda__=1423204850_233917901bb87e459f101563cc057997",
	"https://scontent-a-fra.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/1506060_612405932166269_262620688_n.jpg?oh=e406a74acfce550320a7793f08a7eb7d&oe=551B26F2",
	"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/1798855_609989985741197_395363664_n.jpg?oh=d23359638776ad415d39105eadabe9a8&oe=54D4259B&__gda__=1423060858_fb6ffbdc17ab22e1cd9895aea6add996");

	var max_width = 800;
	function laduj() {
	    zmien(0);
	}
	function zmien(id) {
	    document.getElementById('obraz').innerHTML += '<div id="ladowanie"></div>';
	    var custom = '';
	    var preload = new Image();
	    preload.onload = function() {
	        if(preload.width > max_width) 
	            custom = ' style="height: '+(Math.floor(max_width / (preload.width / preload.height)))+'px;width:'+max_width+'px;"';
	 
	        
	        document.getElementById('obraz').innerHTML = '<img src="'+zdjecia[id]+'"'+custom+' />';
	    }
	    preload.src = zdjecia[id];
	    var q = id +1;
	    //document.getElementById('iloscObrazow').innerHTML = '<p>' + q + " / " + zdjecia.length + "</p>";
	    document.getElementById('iloscObrazow').innerHTML = q + " / " + zdjecia.length;
	    $("#iloscObrazow").css("text-align", "center");
	    
	}
	window.onload = laduj();
	
	var index = 0;
	
	function nastepny(){
		
		index++;
		if (index > zdjecia.length - 1){
			index = 0;
		};
		
		zmien(index);
		$("#obraz").fadeIn(3000);
		
	}
	function poprzedni(){
		index--;
		if (index < 0 ){
			index = zdjecia.length - 1;
		};
		
		zmien(index);
		$("#obraz").fadeIn(3000);
	}
	
	$("#obraz").click(function(){
		$("#obraz").fadeOut(500);
		nastepny();
	});
	$("#nastepny").click(function(){
		$("#obraz").fadeOut(500);
		nastepny();
	});
	$("#poprzedni").click(function(){
		$("#obraz").fadeOut(500);
		poprzedni();
	});
	$("#obraz").css("border", "none");
	$("#obraz").css("text-align", "center");
	
	
	$("#iloscObrazow").css("width", 100);
	
	$("#poprzedni").css("width", 50);
	$("#nastepny").css("width", 50);
});