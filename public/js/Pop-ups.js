/*
Name: Pop-ups.js
objectives:
  1) for Thesaurus results. when a button is clicked inside the #results. a small pup up needs to pop above with 2 buttons, define or thesaurus.
  
*/

thesBtnOptions();

//   1)

function thesBtnOptions() {
  const resultBtns = document.getElementById("results");
  document.addEventListener("click", event => {
    let btns = resultBtns.getElementsByClassName("thesResults");
    //html collection to Array
    console.log(event.target.parentElement instanceof HTMLFormElement);
    console.log(event.target instanceof HTMLFormElement);

    let popupOpen = document.getElementsByClassName("thesPopup");
    console.log("needs to be true" + popupOpen[0]);
    if (popupOpen[0]) {
      if (
        event.target instanceof HTMLFormElement ||
        event.target.parentElement instanceof HTMLFormElement
      ) {
      } else {
        popupOpen[0].remove();
      }
    }
    btns = Array.from(btns);
    const test = btns.forEach(btn => {
      if (btn === event.target) {
        thespopup(btn);
      }
      // btn.setAttribute('onclick',thesBtnClick())
      //console.log(btn);
    });
  });
}

function thespopup(btn) {
  const form = document.createElement("form");
  const defBtn = document.createElement("button");
  const thesBtn = document.createElement("button");
  const btnValue = document.createElement("input");
  form.classList.add("thesPopup");
  form.method = "get";
  form.id = "search";
  form.setAttribute("action", "/whatsthedef/result");
  btnValue.setAttribute("type", "hidden");
  btnValue.setAttribute("value", btn.innerHTML.split("<")[0]);
  btnValue.setAttribute("name", "search");
  defBtn.innerHTML = "Define";
  defBtn.setAttribute("value", "Definition");
  defBtn.setAttribute("name", "requesting");
  defBtn.setAttribute("type", "submit");
  //set up the thesaurus button to submit/ and have the value of thesaurus
  thesBtn.innerHTML = "Thesaurus";
  thesBtn.setAttribute("value", "Thesaurus");
  thesBtn.setAttribute("name", "requesting");
  thesBtn.setAttribute("type", "submit");
  form.appendChild(btnValue);
  form.appendChild(defBtn);
  form.appendChild(thesBtn);
  btn.appendChild(form);
}
