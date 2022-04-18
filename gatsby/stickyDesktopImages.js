function checkWidth() {
  try {
    const gW = window.innerWidth;

    if (gW < 768) {
      notDesktop();
    }

    if (gW >= 768) {
      desktop();
    }
  } catch (e) {}
}


function desktop() {
  try {
    let photoArea = document.querySelectorAll("[class^='PdpApp']")[0];
    photoArea = photoArea.firstChild.firstChild;
    photoArea.style.position = "sticky";
    photoArea.style.height = "100%";
    photoArea.style.top = "0";

  } catch (e) {}
}

function notDesktop() {
  try {
    let photoArea = document.querySelectorAll("[class^='PdpApp']")[0];
    photoArea = photoArea.firstChild.firstChild;
    photoArea.style.position = "relative";
    photoArea.style.height = "auto";
    photoArea.style.top = "";

  } catch (e) {}
}

try {
  checkWidth();
  window.addEventListener("resize", checkWidth);
} catch (e) {}
