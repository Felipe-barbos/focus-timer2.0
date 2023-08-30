import state from "../Focustimer/state.js";
import { ambientSounds } from "./sounds.js";


export function runForest() {



  state.isMute = document.documentElement.classList.toggle('music-on');

  if (state.isMute) {
    ambientSounds.audioForest.play();
    return;
  }

  ambientSounds.audioForest.pause();

}

export function runRain() {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if (state.isMute) {
    ambientSounds.audioRain.play();
    return;
  }

  ambientSounds.audioRain.pause();
}

export function runCoffee() {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if (state.isMute) {
    ambientSounds.audioCoffeShopp.play();
    return;
  }

  ambientSounds.audioCoffeShopp.pause();
}

export function runFire() {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if (state.isMute) {
    ambientSounds.audioFirePlace.play();
    return;
  }

  ambientSounds.audioFirePlace.pause();
}