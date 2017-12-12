# HW7_taggedgallery
Create a multi-view app that involves file transfer, file handling and local storage.

1. Home view:
This is the first view appearing when the app starts. It shows two options:

Download and Search

When the Download option is selected, the app shows the Download view. When the and
Search option is selected, the app shows the Search view.

2. Download view:
It shows two input box and one button:
• URL box: An image URL can be entered here.
• Tag box: One or more tags can be entered here.
• Download button: When clicked, the app will download the image at the URL
specified in the URL box. If the URL is invalid or the download fails, the app
should show the error message in an alert box. Otherwise, the app should show
the confirmation message and save the file properly. The tag and the file name
should be saved in local storage.
When the back arrow at the top is clicked, the app should go back to the home view

3. Search view:
It shows one input box (tag search box) allowing a user to enter a string to search for
image tags.
When one or more non-space characters are entered in the tag search box, the app will
search for the files of which the tag contains the entered string. The name of the matches
files should be listed under the tag search box. When a file name is clicked, the app will
show the clicked image in the image view.
When the back arrow at the top is clicked, the app should go back to the home view

4. Image view:
It shows the image whose name was clicked by the user. When the back arrow at the top
is clicked, the app should go back to the home view.
