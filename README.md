Assignment:  
Create an application to allow a user to enter in recipes.  
Subsequently allow for the user to scale these entered recipes. 


Features:  

Creating Recipes.  
When creating a new recipe the by field is automatically filled based on currently logged in user.    
When adding ingredients previously added ingredients ( for the current step and only the current step ) are displayed and can be removed before commiting the step.  
Recipes set to private are only viewable by their creators. 
HINT Login as ID: mcp PASSWORD: password. 
The Master Control Protocol has an interesting recipe the humans are not alowwed to access.  
  
Recipe view with 4 categories.  
1: All current User's recipes including their own access restricted recipes.  
2: All recipes tagged for unrestricted access.  
3: User's favortie recipes, including restricted access recipes based on the assumption they had access at some point.  
4: Most popular recipes listed by number of favorites. Does not display recipes with restricted access here to prevent displaying if creator favortied their own recipe.   

Recipe Viewer.  
Displays a picture of the item.  
Credits the user who inputted the recipe.  
Displays all the ingredients and steps with desriptions.  
Further breaks down the ingredients into the individual steps.  
Has a functioning button that allows the currently logged in user to favorite a recipe. This button will then also credit that recipe with being favortied by this user.  
An edit this recipe button will appear only if the currently logged in user is the creator. However the button is not yet functional.  

User Features.  
Logging in requires correct login and password. 
Default login is set as guest. 
Confirmation upon login displays current user's handle and avatar.  

Soon to be added.

Ability to add a new user.  
Ability on settings tab to change user's avatar and handle and bio.   
Add a tab to see all users with their bios and avatars and favorites recipes.
Checks to prevent inputting zeros or empty strings into a recipe. 
Allow users to add personal notes, simple array added to recipe object indexed at user id with notes.

Add some tooltips to different links. 

 