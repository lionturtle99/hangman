import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './js/business.js';

// UI Logic

$("#dino-button").on("click", function() {
  $("#rules").addClass("hidden");
  $("#dino-button").addClass("hidden");
  $("#play-area").removeClass("hidden");
  let promise = DinoIpsum.makeCall(1, 1);
  promise.then(function(response) {
    const dino = JSON.parse(response);
    $("#dino-name").text(`This the dino ipsum text: ${dino[0][0]}`);
  });
});