$("input[id='modifEquip']").change(function() {
    if(this.checked) {
       $('.tableauEquipement').append("<p class='col-2' >N° Pot</p><p class='col-3'> Materiel Démonté</p><p class='col-2' >N° Pot</p><p class='col-3'> Materiel Remonté</p><p class='col-2' >neuf</p><div class='row'><input class='col-2' type=' name='><input class='col-3' type=' name='><input class='col-2' type=' name='><input class='col-3' type=' name='><input class='col-2' type=' name='></div> ");
	} else {
	    $('.tableauEquipement').empty(); 
    }
});