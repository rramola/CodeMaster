Project Proposal:
We are building an app called CodeMaster. The purpose of this app is to organize and store quizzes for technical interview questions. The user will be able to view/search for quizzes, create new quizzes, update quizzes, and remove quizzes.


Features:
- Quizzes for Python, HTML, CSS, Javascript?
- Have a base JSON file of quizes
- 5 questions each for the starter quizzes
- Create a quiz (Subject, Questions, Answers)
- View quizzes (View all, Search?)
- Update quizzes (Add, Modify, and, Delete  Questions/Answers)
- Delete Quizzes


Additional features/ideads:
- Have a flash cards feature
- Be able to take quizzes and view score
- If taking a quiz feature is built out, allow the user to type in the answer and check if answer is correct
- Multiple choice questions
- Have a random quiz generated based on current available quizzes


Responsiblities:
Ryan:
Created one Python starter quiz 
Presentation
Created JSON handler function

Kariel:
Created HTML/CSS starter quiz
Create Quiz component
Create GetQuizId component

Devin:
Create one starter quiz
Create Delete component
**Not any heavy CSS**


Updated Responsibilities:
Ryan:
Creating Python questions
Json handler
Creating the Quiz Question Modifier component
Navigation/Routing/Debugging
Some Styling
Delete component

Kariel:
Creating HTML/CSS questions
Json handler
Creating GetQuizId component
Creating the Quiz Creator component
Navigation/Routing/Debugging
Styling

Devin:
styling
presentation


Starter Questions List:
[
 {
  "id": 0,
  "language": "Python",
  "questions": {
   "How do you define a function in Python?": "def",
   "How do you create a list in Python?": "[]",
   "How do you comment a single line in Python?": "#",
   "How do you convert an integer to a string in Python?": "str()",
   "How do you create a multi-line string in Python?": "triple-quotes"
  }
 },
 {
  "id": 1,
  "language": "HTML/CSS",
  "questions": {
   "How do you create an unordered list in HTML?": "<ul>",
   "What CSS property is used to change the text color?": "color",
   "How do you add a border to an element in CSS?": "border",
   "What HTML tag is used to define a paragraph?": "<p>",
   "How do you italicize text in HTML?": "<i>"
  }
 },
 {
  "id": 2,
  "language": "JavaScript",
  "questions": {
   "Which event occurs when a user clicks on an HTML element?": "onClick",
   "How do you call a function named 'myFunction' in JavaScript?": "myFunction()",
   "Is JavaScript case-sensitive?": "Yes",
   "How do you write a message in an alert box?": "alert()",
   "Which operator is used to assign a value to a variable in JavaScript?": "="
  }
 }
]