import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './js/business.js';

// business logic

function playGame(letters) {
  letters.forEach(function(letter) {
    $("#letter-box").append(`<div class='letter-block'><p class='hidden guess-${letter}'>`+letter+"</p></div>");
  });

}

function getWord() {
  let promise = DinoIpsum.makeCall();
  promise.then(function(response) {
    const dino = JSON.parse(response);
    let letters = dino[0][0].toLowerCase().split("");
    playGame(letters);
  });
} 



// UI Logic

$("#dino-button").on("click", function() {
  $("#rules").addClass("hidden");
  $("#dino-button").addClass("hidden");
  $("#play-area").removeClass("hidden");
  getWord();
});

$("#letter-submit").on("click", function (){
  let guess = $("#letter-guess").val();
  let guessMatch = false;

  $('#letter-box > div > p' ).each(function(){
    let element = this;
    let letter = $(element).text();
    if (guess === letter) {
      $(element).removeClass("hidden");
      guessMatch = true;
    }  
  });

  if (guessMatch === false) {
    $("#wrong-box").append(`<p>${guess}</p>`);
  }
  
  // for (let e=0; e <= $('#letter-box > div > p' ); e++){
  //   let guess = $("#letter-guess").val();
  //   let letter = $(element).text();
  //   if (guess === letter) {
  //     $(element).removeClass("hidden");
  //   } else {
  //     $("#wrong-box").append(`<p>${guess}</p>`);
  //   }
  // };
  
});

// $("#letter-box").forEach(function(div) {
  
  

// })
// let p = $("p").text()
// guess = a

// some code that checks each <p> for (has class `guess-${guess}`)

