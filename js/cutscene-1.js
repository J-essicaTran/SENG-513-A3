// Course: SENG 513
// Date: Nov 16, 2023
// Assignment 3
// Name: Jessica Tran
// UCID: 30089544

let imageIndex = 0;
const dialogImages = document.querySelectorAll('#dialog-container img');

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        dialogImages[imageIndex].style.display = 'block';
    }, 2500);
});

document.body.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        if (imageIndex != dialogImages.length) {
            showDialog();
        }
    }
});

function showDialog() {
    var nextButton = document.getElementById('next');
    
    dialogImages[imageIndex].style.display = 'none';
    imageIndex = imageIndex + 1;

    if (imageIndex != dialogImages.length) {
        dialogImages[imageIndex].style.display = 'block';
    }
    else {
        setTimeout(function() {
            nextButton.style.opacity = 1;
        }, 500);
    } 
}

document.getElementById('cutscene-2').addEventListener('click', function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
      window.location.href = 'cutscene-2.html';
    }, 1000);
  });