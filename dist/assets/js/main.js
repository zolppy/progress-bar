"use strict";
var button = document.querySelector(".progress-bar__button");
var showFeedback = function (feedback) {
    var feedbackEl = document.querySelector(".progress-bar__feedback");
    feedbackEl.textContent = feedback;
};
var toggleSetAnimation = function () {
    var progressEl = document.querySelector(".progress-bar__progress");
    progressEl.classList.toggle("is-animated");
};
var startAnimation = function (feedback) {
    setTimeout(function () {
        toggleSetAnimation();
        showFeedback(feedback[0]);
    }, 0);
    setTimeout(function () {
        showFeedback(feedback[1]);
    }, 800);
    setTimeout(function () {
        showFeedback(feedback[2]);
    }, 2000);
    setTimeout(function () {
        showFeedback(feedback[3]);
    }, 3800);
    setTimeout(function () {
        showFeedback(feedback[4]);
    }, 4900);
    setTimeout(function () {
        showFeedback(feedback[5]);
        toggleSetAnimation();
    }, 5900);
};
button.addEventListener("click", function () {
    var feedback = [
        "Feedback 1",
        "Feedback 2",
        "Feedback 3",
        "Feedback 4",
        "Pronto!"
    ];
    startAnimation(feedback);
});
