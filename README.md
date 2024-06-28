# Guess-The-Number

This project is a web-based number guessing game built with HTML, CSS, and JavaScript. Users have 10 attempts to guess a randomly generated number within a specified range. The application provides feedback on each guess, indicating if it's too high, too low, or correct.

**Features:**

* Engaging number guessing game with 10 attempts.
* Random number generation for a fair challenge.
* User-friendly interface for guess input and feedback display.
* Clear indication of remaining attempts and win/lose status.
* Lightweight and easy to understand code.

**Getting Started:**

1. **Download the files:** Clone or download the project repository to your local machine.
2. **Open the files:** Use a text editor or code editor to open the following files:
    * `index.html`: The main HTML file containing the webpage structure.
    * `styles.css`: The CSS file defining the styling of the elements.
    * `script.js`: The JavaScript file handling the game logic, random number generation, and user interaction.
3. **Run the project:** Open `index.html` in your web browser to start the application.

**Project Structure:**

* **index.html:** This file defines the basic structure of the game. It includes an input field for the user's guess, a button to submit the guess, a section to display feedback messages (too high, too low, correct), and an area to show remaining attempts. It also links the `styles.css` and `script.js` files for styling and functionality.
* **styles.css:** This file provides the visual design for the elements. It defines styles for the input field, button, feedback messages, remaining attempt counter, and potentially other elements present in the `index.html` file.
* **script.js:** This file contains the JavaScript code that controls the game logic. It generates a random number within a predefined range (e.g., 1 to 100) on page load. It handles user interaction with the guess button, retrieves the user's guess value, and compares it to the generated number. Based on the comparison, the script updates the feedback section with messages like "Too high!", "Too low!", or "Congratulations! You guessed it!". It also keeps track of remaining attempts and displays the number of attempts left. If the user guesses the correct number within 10 attempts, the script displays a win message. Otherwise, it displays a lose message after the attempts are exhausted.

**Functionality:**

When the user opens the webpage, they will see an input field to enter their guess, a button to submit the guess, and a section to display feedback messages. Initially, the remaining attempts counter will show 10. Clicking the button triggers the JavaScript code, which checks the user's guess against the generated random number. The script updates the feedback section based on the comparison and decrements the remaining attempts counter. The game continues until the user guesses the correct number within 10 attempts or exhausts all attempts.

**Customization:**

* You can modify the difficulty level by changing the range of the random number generation in the JavaScript code.
* You can adjust the visual design of the game by editing the styles in the `styles.css` file. 
* You can modify the feedback messages displayed to the user by editing the JavaScript code.


**Further Enhancements:**

* Implement a leaderboard to track high scores and encourage competition.
* Allow users to choose the difficulty level by selecting a desired range for the random number.
* Add sound effects or animations for a more engaging user experience.

**Conclusion:**

This project showcases the interactive capabilities of HTML, CSS, and JavaScript. It provides a fun and challenging number guessing game that can be further extended to create a more immersive and feature-rich experience.
