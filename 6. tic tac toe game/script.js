let btnRef = document.querySelectorAll(".button-option");
let restartBtn = document.querySelector("#restart");
let newgameBtn = document.querySelector("#new-game");
let msgRef = document.querySelector("#message");
let popupRef = document.querySelector(".popup");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let disablesbtn = () => {
  btnRef.forEach((element) => {
    element.disabled = true;
  });
  popupRef.classList.remove("hide");
};

const enablebtn = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enablebtn();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enablebtn();
});

let winFunction = (letter) => {
  disablesbtn();

  if (letter == "X") {
    msgRef.innerHTML = " 'x' wins";
  } else {
    msgRef.innerHTML = " 'O' wins";
  }
};

const drawfunction = () => {
  disablesbtn();
  msgRef.innerHTML = " <br> It's a Draw";
};

const winchecker = () => {
  winningPattern.forEach((pattern) => {
    const [a, b, c] = pattern;

    let element1 = btnRef[a].innerText;
    let element2 = btnRef[b].innerText;
    let element3 = btnRef[c].innerText;

    if (element1 && element1 === element2 && element2 === element3) {
      winFunction(element1);
    }
  });
};

let xturn = true;
let count = 0;

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xturn) {
      xturn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xturn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count++;

    if (count === 9) {
      drawfunction();
    }
    winchecker();
  });
});

window.onload = enablebtn;
