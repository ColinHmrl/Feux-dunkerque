$("input[id='modifEquip']").change(function() {
    if(this.checked) {
       $('.tableauEquipement').append("<p class='col-2' >N° Pot</p><p class='col-3'> Materiel Démonté</p><p class='col-2' >N° Pot</p><p class='col-3'> Materiel Remonté</p><p class='col-2' >neuf</p><div class='row'><input class='col-2' type=' name='><input class='col-3' type=' name='><input class='col-2' type=' name='><input class='col-3' type=' name='><input class='col-2' type=' name='></div> ");
	} else {
	    $('.tableauEquipement').empty(); 
    }
});







function sendEmail() {
	console.log("email envoyé")
  Email.send({
  Host: "smtp.gmail.com",
  Username : "tontonriley007@gmail.com",
  Password : "colin1202",
  To : 'Hamerel.co@gmail.com',
  From : "tontonriley007@gmail.com",
  Subject : "Ceci est un test",
  Body : "<p>mdr</p>",
  //Attachments : [
  	//{
  	//	name : "smtpjs.png",
  	//	path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
  	//}]
  }).then(
  	message => alert("mail sent successfully")

  );
}
