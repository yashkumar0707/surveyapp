# surveyapp
### data.js
This file contains the json data that can be changed based on the user requirements. Holds the questions and options.
### login.html
This is the html page for the **log in/ Authentication** which directs to the survey if satisfied.
### login.js
This runs on node and checks if the authentication is succesful or not redirecting to the survey based on that. Checks the credentials with the **database(firebase)**
### survey.html
This html file displays the **survey** to the user **dynamically**. With the continue button loading the next question. After the questions are completed the result is displayed.
### survey.js
This is a node file which refreshes the pages dynamically and stores every users answers in the database(firestore).
### style.css
The beautification factor
### Test folder
Used for running a few test cases

## How to use the survey app
**Step 1**- Open the login.html<br/> 
            Sign in / Sign up successfully.<br/>
            One user can take the survey only once.<br/>
**Step2**- CLick on the start survey button.<br/>
            This redirects you to the survey<br/>
**Step3**- Complete the survey.<br/>
**Step4**- Result will be displayed.
