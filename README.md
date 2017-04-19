Assignment:  
Create an application to allow a user to enter in recipes.  
Subsequently allow for the user to scale these entered recipes. 


Features:  

Creating Recipes.  
When creating a new recipe the by field is automatically filled based on currently logged in user.    
When adding ingredients previously added ingredients ( for the current step and only the current step ) are displayed and can be removed before commiting the step.
Returns Alert errors when attempting to submit with zeros or strings in number fields or empty strings in text fields.    
Recipes set to private are only viewable by their creators.
HINT Login as ID: mcp PASSWORD: password. 
The Master Control Protocol has an interesting recipe the humans are not allowed to access.  
  
Recipe view with 4 categories. This is the home page and can also be reached by clicking on the BATCH CONSTRUCTOR title.    
1: All current User's recipes including their own access restricted recipes.  
2: All recipes tagged for unrestricted access.  
3: Current user's favorite recipes, including restricted access recipes based on the assumption they had access at some point.  
4: Most popular recipes listed in descending order of favorites. Does not display recipes with restricted access, prevents displaying if creator favorited their own secret recipe.   

Recipe Viewer.  
Displays a picture of the item.  
Credits the user who inputted the recipe.  
Displays all the ingredients and steps with descriptions.  
Further breaks down the ingredients into the individual steps.  
Users can input a new serving amount and hit the adjust button. All ingredient requirements will be updated based upon this new serving amount.  
Has a functioning button that allows the currently logged in user to favorite a recipe. This button will then also credit that recipe with being favorited by this user.  
An edit this recipe button will appear only if the currently logged in user is the creator. However this button is not yet functional.  

User Features.  
Logging in requires correct login and password. 
Default login is set as guest. 
Confirmation upon login displays current user's handle and avatar.  
Attempting to login with incorrect information provides an alert error.    
Can create new users. When creating a new user the program will provide error alerts if login id exists or if necessary fields are left blank.  
User Repository page to view all users with their avatars, bios, and created recipes( which link to each recipe's recipe view page).  
Users can add their own personal notes to any recipe.  


Features to be added.  
 
A settings tab to allow user's to change avatar, handle and bio.    
Add some tooltips.  
Implement Fahrenheit to Celsius conversion.  

Known Bugs.  

User gets logged out upon submitting a new recipe or when adding a personal note to a recipe.    