
$(".send").click(function() {

  if(/^[a-zA-Z-ùçéè]+$/.test($('#nom').val())){
    console.log('valid name');
  } else {
    alert("Nom invalide");
  };

  if (/^[a-zA-Z-ùçéè]+$/.test($('#prenom').val())) {
    console.log('valid firstname');
  } else {
    alert("Prénom invalide");
  }


})
