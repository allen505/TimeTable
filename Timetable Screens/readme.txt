1. Login(1.png)
> First screen of the app when the user opens app for first time/is not logged into the app.
> Screen does not show up in case user is already logged in.


2. Timetable Screen (2.png)
> Obtained by a successful login and common for all users.
  2a. Timetable Screen has an overlay of the search function(2’sSearchOverlay.png)
      > Search function has a keyboard popup to allow the user to search the database for viewing teacher timetables.
      > Has recently searched teachers as suggestions for easy access.
      > A tap on any name on this screen will take the user to their Teacher Info screen(TeacherInfo.png).
      > Tapping back takes user back to timetable screen.


3a. Substitute(SubstituteTab.png)
> Displays a screen of the timetable layout that allows the user to select the required classes they want substitution for that includes a date bar on top to pick the date of required substitution.


3b. Substitution teacher pick (SubstituteScreen2.png)
> Obtained by tapping Next on the Substitute tab.
> Displays card info of all teachers with a badge whether teachers are available for those selected sessions.
> Card info has an ‘i’ button that takes the users to the ‘Teacher Info’ screen(TeacherInfo.png).
> Badge also shows the number of classes the teacher is available for, or if they aren’t available for any on given date, obtained from the database.
> Has a ‘next’ and a ‘back’ button:
  Next takes user to confirmation dialog.
  Back takes user back to pick substitution sessions and date(SubstituteScreen.png).


3c. Confirmation dialog(SubstituteConfirm.png)
> Pops up as an overlay to SubstituteScreen2 at the card selection page.
> Refer to screenshot for exact wordings on the dialog box.
> Confirm takes the user to confirm HOD screen.
> Cancel will remove the overlay and go back to SubstituteScreen2.


4. Status screen 
> Has card like layout of all requested permissions and has badge to show status of request.
> Every change in status of this badge in the screen should send a push notification to the given user about the requested permission for each card.
> When user is a HOD, he will also have an extra option to accept or reject the substitution, and will be automatically approved if no    response is received for more than 2 hours.
  Accept will allow the request receiver’s decision to pass through.
  Reject will reject the request at the request transmitter’s end with a message on the status badge as ‘Rejected by HOD’.


5. Teacher Info Screen(TeacherInfo.png)
> Has a timetable layout that displays the teacher’s current day timetable.
> Has a date bar on top to select the respective date to view selected date’s timetable.
> Has a Display picture, Name, Department, Designation and current session information(not shown in screenshot ,should be added) on top.


Please refer to attached screenshots as well as video of flow uploaded on github.







                   


