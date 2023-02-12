const download = document.getElementsByClassName('mybtn');
var clickCounter = 0;

download[0].addEventListener("click", joke, false);

function joke(event) {
  event.preventDefault();
  const joke = document.getElementById("joke"),
  joke2 = document.getElementById("joke2");

    clickCounter++;
    if (clickCounter == 1) {
      joke.style.visibility = "visible";
    } else if (clickCounter == 2) {
      joke2.style.visibility = "visible";
      joke.style.visibility = "hidden";
    } else if (clickCounter == 3) {
      joke2.style.visibility = "hidden";
      window.open('BauenMitMenschen.docx', '_blank');
      clickCounter = 0;
    }

}

console.log(clickCounter);