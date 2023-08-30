import state from "./state.js";

import * as sounds from "../SoundsApp/sounds.js"

import * as timer from "../Focustimer/timer.js";

import * as el from "../elements.js";



let scoreMinutes = 0;


const minutes = el.minutes;
const seconds = el.seconds;


export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();


  sounds.buttonPressAudio.play();
}


export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
  sounds.buttonPressAudio.play();

  scoreMinutes = 0;

}


export function addFiveMinutes() {

  let attSeconds = Number(seconds.textContent);


  scoreMinutes += 5;

  if (scoreMinutes > 60) {
    scoreMinutes = 0;
    attSeconds = 0;
  }

  timer.updateDisplay(scoreMinutes, attSeconds);


  sounds.buttonPressAudio.play();


}

export function removeFiveMinutes() {

  scoreMinutes = Number(minutes.textContent);

  let attSeconds = Number(seconds.textContent);

  scoreMinutes -= 5;

  if (scoreMinutes <= 0) {
    scoreMinutes = 0;
    attSeconds = 0;
  }

  timer.updateDisplay(scoreMinutes, attSeconds);
  sounds.buttonPressAudio.play();
}




