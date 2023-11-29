function mudar() {
  let numAletorio = Math.floor(Math.random() * (8 - 1) + 1);
  switch (numAletorio) {
    case 1:
      document.querySelector("body").style.background = "red";
      break;
    case 2:
      document.querySelector("body").style.background = "orange";
      break;
    case 3:
      document.querySelector("body").style.background = "yellow";
      break;
    case 4:
      document.querySelector("body").style.background = "green";
      break;
    case 5:
      document.querySelector("body").style.background = "indigo";
      break;
    case 6:
      document.querySelector("body").style.background = "blue";
      break;
    case 7:
      document.querySelector("body").style.background = "violet";
      break;
  }
}
