// Course: SENG 513
// Date: Nov 16, 2023
// Assignment 3
// Name: Jessica Tran
// UCID: 30089544

document.getElementById('cutscene-1').addEventListener('click', function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
      window.location.href = 'cutscene-1.html';
    }, 1000);
  });