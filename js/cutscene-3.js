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
    var div1 = document.getElementById('div-1');
    var sun = document.getElementById('sun');
    var clouds = document.getElementById('clouds');

    if (event.code === "Space") {
        if (imageIndex != dialogImages.length) {

            if (imageIndex == 3) {
                dialogImages[imageIndex].style.display = 'none';
                div1.style.backgroundImage = "url('assets/cutscenes/cutscene_3.png')";
                sun.style.display = 'none';
                clouds.style.display = 'none';
                
                setTimeout(function() {
                    showDialog();
                }, 1500);
            }
            else if (imageIndex == 4) {
                dialogImages[imageIndex].style.display = 'none';
                div1.style.backgroundImage = "url('assets/cutscenes/cutscene_4.png')";
                sun.style.display = 'none';
                clouds.style.display = 'none';
                
                setTimeout(function() {
                    showDialog();
                }, 1500);
            }
            else if (imageIndex == 5) {
                dialogImages[imageIndex].style.display = 'none';
                div1.style.backgroundImage = "url('assets/cutscenes/cutscene_3.png')";
                sun.style.display = 'none';
                clouds.style.display = 'none';
                
                setTimeout(function() {
                    showDialog();
                }, 1500);
            }
            else if (imageIndex == 7) {
                dialogImages[imageIndex].style.display = 'none';
                div1.style.backgroundImage = "url('assets/cutscenes/cutscene_1.gif')";
                div1.style.backgroundposition ='center';
                sun.style.display = 'none';
                clouds.style.display = 'none';
                
                setTimeout(function() {
                    showDialog();
                }, 1500);
            }
            else {
                showDialog();
            }
        }
    }
});

function showDialog() {
    var homeButton = document.getElementById('home');
    
    dialogImages[imageIndex].style.display = 'none';
    imageIndex = imageIndex + 1;

    if (imageIndex != dialogImages.length) {
        dialogImages[imageIndex].style.display = 'block';
    }
    else {
        setTimeout(function() {
            homeButton.style.opacity = 1;
        }, 500);
    } 
}

document.getElementById('index').addEventListener('click', function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 1000);
});