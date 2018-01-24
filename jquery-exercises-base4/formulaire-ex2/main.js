$("#bouton").click(function() {
  let salaire = parseInt($("#salaire").val());   ///parseInt => prends les input comme chifre et pas texte
  let genre = ($("#sexe").val()).toUpperCase();
  let nbreEnf = parseInt($("#nbreEnfant").val());
  let reduc = salaire * 30 /100;

  if ( genre === "F" ) {
    if ( nbreEnf === 3 ) {
      reduc = reduc - ( reduc * 3 / 100 );
      salaire = salaire - reduc;
      console.log(salaire);
      $(".div2").text("votre salaire sera de " + salaire + "€")
    } else if ( nbreEnf === 4 ) {
      reduc = reduc - ( reduc * 4 / 100 );
      salaire = salaire - reduc;
      $(".div2").text("votre salaire sera de " + salaire + "€")
    } else {
      reduc = reduc - ( reduc * 2 /100 );
      salaire = salaire - reduc;
      $(".div2").text("votre salaire sera de " + salaire + "€")
    }
  } else if ( genre === "M" ) {
      if ( nbreEnf === 3 ){
        reduc = reduc - ( reduc * 1 / 100 );
        salaire = salaire - reduc;
        $(".div2").text("votre salaire sera de " + salaire + "€")
      } else if ( nbreEnf === 4 ) {
        reduc = reduc - ( reduc * 2 / 100 );
        salaire = salaire - reduc;
        $(".div2").text("votre salaire sera de " + salaire + "€")
      } else {
        salaire = salaire - reduc;
        $(".div2").text("votre salaire sera de " + salaire + "€")
      }
      }
})
