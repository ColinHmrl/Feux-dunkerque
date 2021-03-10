var nbrLigne = 0;


$("input[id='modifEquip']").change(function() {
    if(this.checked) {
       $('.tableauEquipement').append("<p class='col-2' >N° Pot</p><p class='col-3'> Materiel Démonté</p><p class='col-2' >N° Pot</p><p class='col-3'> Materiel Remonté</p><p class='col-2' >neuf</p><div class='row'><input class='col-2' type=' name='><input class='col-3' type=' name='><input class='col-2' type=' name='><input class='col-3' type=' name='><input class='col-1' type=' name='><button class='col-1' onclick='ajoutLigne()'>  +  </button></div> ");
		nbrLigne = 1;
	} else {
	    $('.tableauEquipement').empty(); 
	    nbrLigne = 0;
    }
});


function ajoutLigne(){
	$('.tableauEquipement').append("<input class='col-2' type='' name=''><input class='col-3' type='' name=''><input class='col-2' type='' name=''><input class='col-3' type='' name=''><input class='col-1' type='' name=''>");
}

function send(){
	let body= $('body').text();
	let email= 'Hamerel.co@gmail.com';
	let subject='test';
	window.open('mailto:'+email+'?subject='+subject+'&body='+body);
}

function createPDF(){

	var doc = new jsPDF()
	console.log($('body').text());
	doc.text($('body').text(), 10, 10);
	doc.save("a4.pdf");
}
