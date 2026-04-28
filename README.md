# Overview

Welcome to my cat quiz regarding facts about cats. Please continue reading as this README document provides information about my website, the creation and its process, as well as a guide on how to start.

My Cat quiz is available by clicking the following link:

[My Cat quiz Website](https://tibnaamer.github.io/cat-quiz/)

<br>

# Introduction

This Cat quiz was made as I love Cats and I want to test the knowledge of users. I hope that users attempting my quiz learn something new. The quiz was made in a way so that users can effortlessly start a game, which has randomised questions. Due to the quiz being different every game, they can try repeated attempts and have a unique experience every time they play.

<br>

# User Stories

### First-Time Visitor Goals:

- As a first-time visitor, I want to be able to easily navigate the game's controls.
- As a first-time visitor, I want to effortlessly understand the site's primary purpose as well as what it does.
- As a first-time visitor, I want to be able to quickly start the game, as that is why I have visited the website.

### Returning Visitor Goals:

- As a returning visitor, I want to be able to repeatedly test my knowledge, but not have the identical experience again, as if that is the case, I would just end up memorising the questions.
- As a returning visitor, I want to retry the quiz and see if I am able to get a better score.
- As a returning visitor, I want the website/quiz layout to be the same, so that I can get straight into a new game without having to relearn how to navigate the website/quiz.

### Frequent Visitor Goals:

- As a frequent visitor, I want to test my friends as well, so that I can see who can get a better score.
- As a frequent visitor, I want to be able to keep practising in order to improve my knowledge and my game score.

### Target Audience Is:

- Interested in Cats.
- Interested in fun learning.
- Interested in quizzes.
- Interested in learning about random cat facts.

<br>

# Features

### The website exists on only one page and has multiple features that are visible to users. Please read below a guide on the website's navigation and features:

- For users who are unsure of how the game works, they can select the 'Tutorial' button, which will make a pop-up appear that will explain how the game works.

![Tutorial Button](Assets/Images/TutorialButton.png)

- When the user selects the start button, it will start the game and show the first question.
- The Tutorial pop-up informs users on how to play.

![Tutorial Pop-up Guide](Assets/Images/TutorialPop-upGuide.png)

- In the centre of the page, users will see a 'Start' button allowing them to start the game.

![Start Button](Assets/Images/StartButton.png)

- Once you have completed the quiz, you will see your total score as well as a 'Play Again' button allowing users to restart the quiz.

![Total Score](Assets/Images/TotalScore.png)

<br>

# Technologies Used

- VSCode was used as my main tool in order to write/edit code
- Git was used to deal with the version control of my website
- GitHub was used to host the code of my website
- HTML was used as the foundation/structure of my site
- CSS was used to style and edit the layout of my site
- JavaScript was used to create the features, interactivity and visuals required to make my quiz function

<br>

# Validation

### HTML

In order to confirm the correct functionality, responsiveness and appearance of my website, I used an online validator in order to test my code.

During the creation of my website, I encountered errors. For example, in my HTML file, I encountered the following error:

![HTML Error](Assets/Images/HTMLError.png)

I amended this particular issue by ensuring that my <dialog> tag was closed correctly and placed in the correct location.

![HTML Error Fix](Assets/Images/HTMLErrorFix.png)

This is how I ensured that my HTML file remained error-free.

![HTML Checker Results](Assets/Images/HTMLCheckerResults.png)

### CSS

Another error I encountered was in my CSS file:

![CSS Error](Assets/Images/CSSError.png)

I amended this error by proofreading my CSS file and adding '20px;' in the correct location.

![CSS Error Fix](Assets/Images/CSSErrorFix.png)

This is how I ensured that my CSS file remained error-free.

![CSS Checker Results](Assets/Images/CSSCheckerResults.png)

### JS

The final error I encountered was in my JS file:

![JS Error](Assets/Images/JSError.png)

I was able to fix this error by proofreading my JS file and realising 'tutorialDialog.close' at the end of my JS file was inputted incorrectly, please see the amended version below:

![Amended JS Error](Assets/Images/AmendedJSError.png)

Through the use of various validators, I was able to ensure that the code was free from errors and efficient.

<br>

# Accessibility

The website was tested using Lighthouse, please find the report below:

![Lighthouse Score](Assets/Images/LighthouseScore.png)

Lighthouse tests the performance, accessibility, best practices and SEO of a website.

I also ensured that the website is responsive regardless of what device users use to access the website, for example:

On a laptop screen, the website will feature larger buttons.
While on a mobile phone, the website screen and buttons will be smaller.

<br>

# Deployment

### The site was deployed to GitHub Pages, the steps I followed are as follows:

- While in the GitHub repository, navigate to the Settings tab
- Inside the source section, select the Main Branch and click the "Save" button
- Once the page has been refreshed and there are no issues, this will indicate successful deployment.

<br>

# Credits

Research and information about Cat facts gathered from the following source:

[FactRetriever.com](https://www.factretriever.com/cat-facts)

Code validation was done through the use of the following websites:

[HTML Validator](https://validator.w3.org/nu/#textarea)
[CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
[JS Validator](https://www.site24x7.com/tools/javascript-validator.html)
