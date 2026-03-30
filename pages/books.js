import { getData } from "../js/functions/getData.js";

window.addEventListener('DOMContentLoaded', () => {
  initGetData();
});

async function initGetData(){
  await getData();
}

