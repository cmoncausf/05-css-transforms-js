// Get the element where the answer will be displayed.
const answer = document.getElementById("answer");
// Array of possible answers for the Magic 8-Ball.
const answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

// Get the Magic 8-Ball element.
const magicBall = document.getElementById("magicBall");

// Event listener for the Magic 8-Ball click.
magicBall.addEventListener("click", function() {
  // Clear the answer before shaking.
  answer.innerText = "";

  // Add the 'shake' class to start the animation.
  magicBall.classList.add("shake");

  // Wait for the animation to finish (0.6 seconds).
  setTimeout(function() {
    // Remove the 'shake' class so it can be used again next time.
    magicBall.classList.remove("shake");

    // Pick a random answer from the array.
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];

    // Show the answer inside the ball.
    answer.innerText = randomAnswer;
  }, 600);
});
