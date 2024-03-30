Unit Project (JavaScript/React) Requirements

*Presentations on March 26*

Your job is to create a React app that utilizes a public API. You can find public APIs from a quick Google search. For reference, here is a repo that contains a ton of free APIs free of use: https://github.com/public-apis/public-apis

Note: Make sure to integrate with APIs that don't require any authentication. You will learn more about authentication such as OAuth2 and Api Keys later in the year.

We want you to integrate with APIs that have multiple HTTP methods. You may have seen/heard of us mention CRUD (Create, Read, Update, Delete). Create being a POST, Read being a GET, Update being a PUT, and Delete being a DELETE. If you want to learn more about different HTTP methods or learn more about them, here is a helpful link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods.



***************************************************************************************

The required methods we would like to see you use is an example of the following:


-- Create a CRUD app that interacts with data with local json

-- Have functionality on your app to pull all data, pull data by a specific entry, create json data, update json data, and remove json data

-- There should be a “components” folder in the “src” directory that contains a folder for each component then your actual jsx component in that (reference Logan’s pizza practice)

*You must use React and be sure to style your web app to make it presentable*

***************************************************************************************



**  If you want, you can still use a free api to pull and interact with actual data
For example, you call a dealership api to pull all the cars on their lot. You then format that json in whatever structure you feel would be most efficient. Then, you create UI components to allow the user to add a new car which would append to that json data you stored locally from the api. Say there’s a component to view a specific car, you would query your local json data to grab the data for the specific car they clicked on and so forth.



To submit, send Logan, Briana, and Trey the link to your github repository. Be sure to deploy your app to GitHub pages.

Helpful Tools:
Postman
 Postman is an application that allows the testing of web APIs. With Postman, you can call APIs to call them and interact with them before actually implementing the logic into your code.
You can download the postman app or use the browser version (you will need to create an account)



**************************************************************************************
********************OVERVIEW**********************
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

**************************************************************************************

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

*******************************************************************************

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

*************************NPM INSTALLS*********************
At the base level in your project's folder do:
1.) npm install axios
2.) npm install react-router-dom
3.) npm install --save @fortawesome/fontawesome-svg-core
4.) npm install
5.) cd GenericApiForClass

Inside GenericApiForClass:
1.) npm install