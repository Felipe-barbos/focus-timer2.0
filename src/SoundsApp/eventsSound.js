import * as el from "../elements.js";
import * as actionsSounds from "../SoundsApp/actionsSound.js";



export function soundControls() {
  el.controlsSound.addEventListener("click", (event) => {
    const button = event.target;

    buttonSelective(button);


    const action = event.target.dataset.action;

    if (typeof actionsSounds[action] != "function") {
      return;
    }

    actionsSounds[action]();

  });
}


export function buttonSelective(button) {
  button.classList.toggle("selective");

  if (button.classList.contains("selective")) {
    button.style = "background-color:var(--primary-color); color:white"
  }
  else {
    button.style = "background-color:#d8d8dc; color: var(--text-color)";

  }
}
