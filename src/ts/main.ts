const button: HTMLElement = document.querySelector(".progress-bar__button") as HTMLButtonElement;

const showFeedback = (feedback: string): void => {
  const feedbackEl: HTMLElement = document.querySelector(".progress-bar__feedback") as HTMLHeadingElement;

  feedbackEl.textContent = feedback;
}

const toggleSetAnimation = (): void => {
  const progressEl: HTMLElement = document.querySelector(".progress-bar__progress") as HTMLDivElement;

  progressEl.classList.toggle("is-animated");
}

const startAnimation = (feedback: string[]): void => {
  setTimeout(() => {
    toggleSetAnimation();
    showFeedback(feedback[0]);
  }, 0);
  
  setTimeout(() => {
    showFeedback(feedback[1]);
  }, 800);
  
  setTimeout(() => {
    showFeedback(feedback[2]);
  }, 2000);
  
  setTimeout(() => {
    showFeedback(feedback[3]);
  }, 3800);

  setTimeout(() => {
    showFeedback(feedback[4]);
  }, 4900);

  setTimeout(() => {
    showFeedback(feedback[5]);
    toggleSetAnimation();
  }, 5900);
}

button.addEventListener("click", () => {
  const feedback: string[] = [
    "Feedback 1",
    "Feedback 2",
    "Feedback 3",
    "Feedback 4",
    "Pronto!"
  ];

  startAnimation(feedback);
});