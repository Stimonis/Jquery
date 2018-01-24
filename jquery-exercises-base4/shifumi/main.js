let win = 0;
let lose = 0;
let counter = 0;
let average = 0;



$(".pierre").click(function() {
  $(".papier, .ciseau").css("backgroundColor", "white");
  counter++;
  $(".pierre2, .papier2, .ciseau2").css("backgroundColor", "white");
  $(".pierre").css("backgroundColor", "lightblue");
  let randomChoice = Math.ceil(Math.random() * 3);
  console.log(randomChoice);
  if ( randomChoice === 1 ) {
    $(".pierre2").css("backgroundColor", "lightgrey");
    $(".statut").text("égalité");
  } else if ( randomChoice === 2 ) {
      $(".papier2").css("backgroundColor", "lightgrey");
      $(".perdu").text(++lose);
      $(".statut").text("perdu");
  } else {
      $(".ciseau2").css("backgroundColor", "lightgrey");
      $(".gagne").text(++win);
      $(".statut").text("gagné");
  }
  average = ((win/counter) * 100).toFixed(1);
  $(".average").text(average + "%");
});

$(".papier").click(function() {
  $(".pierre, .ciseau").css("backgroundColor", "white");
  counter++;
  $(".pierre2, .papier2, .ciseau2").css("backgroundColor", "white");
  $(".papier").css("backgroundColor", "lightblue");
  let randomChoice = Math.ceil(Math.random() * 3);
  console.log(randomChoice);
  if ( randomChoice === 1 ) {
    $(".pierre2").css("backgroundColor", "lightgrey");
    $(".statut").text("égalité");
  } else if ( randomChoice === 2 ) {
      $(".papier2").css("backgroundColor", "lightgrey");
      $(".perdu").text(++lose);
      $(".statut").text("perdu");
  } else {
      $(".ciseau2").css("backgroundColor", "lightgrey");
      $(".gagne").text(++win);
      $(".statut").text("gagné");
  }
  average = ((win/counter) * 100).toFixed(1);
  $(".average").text(average + "%");
});

$(".ciseau").click(function() {
  $(".pierre, .papier").css("backgroundColor", "white");
  counter++;
  $(".pierre2, .papier2, .ciseau2").css("backgroundColor", "white");
  $(".ciseau").css("backgroundColor", "lightblue");
  let randomChoice = Math.ceil(Math.random() * 3);
  console.log(randomChoice);
  if ( randomChoice === 1 ) {
    $(".pierre2").css("backgroundColor", "lightgrey");
    $(".statut").text("égalité");
  } else if ( randomChoice === 2 ) {
      $(".papier2").css("backgroundColor", "lightgrey");
      $(".perdu").text(++lose);
      $(".statut").text("perdu");
  } else {
      $(".ciseau2").css("backgroundColor", "lightgrey");
      $(".gagne").text(++win);
      $(".statut").text("gagné");
  }
  average = ((win/counter) * 100).toFixed(1);
  $(".average").text(average + "%");
});
