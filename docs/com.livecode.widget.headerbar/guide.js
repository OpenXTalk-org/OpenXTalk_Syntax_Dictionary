{
	"name": "com.livecode.widget.headerbar",
	"display name": "Header Bar",
	"group": "Extensions",
	"location": "/Users/paul/Desktop/Dev Stuff/OpenXTalk 1.963.1rc5.app/Contents/Tools/Extensions/com.livecode.widget.headerbar/docs/guide",
"data":"# Header Bar Widget\nThe header bar widget can be used to allow the user to navigate around \nyour app and take actions, providing a visual structure to your app.\nThe widget emulates the iOS navigation bar and the Android app bar. If \nyou are working on Mac a header bar widget will be themed like an iOS \nnavigation bar, if you are working on Windows or Linux it will be themed \nlike an Android app bar.\n\nWindows / Linux / Android\n\n![Windows header](images/header.png)\n\nMac / iOS\n\n![Mac header](images/mac-header.png)\n\nFor example in the iOS Clock app the header bar allows the user to \nchoose to edit or add an alarm by navigating to another screen within \nthe Alarm section of the app.\n\n![Clock app header](images/clock.png)\n\nAs well as navigating around the app the header bar can also be used to provide access to options such as search, save and delete.\n\n## Creating a Header Bar\nA header bar widget can be created by dragging it out from the Tools\nPalette, where it appears with the following icon:\n\n<svg viewBox=\"0 0 80 30\" style=\"display:block;margin:auto\" width=\"auto\" height=\"50\">\n  <path d=\"M0,0v29.5h80.2V0H0z M13.2,20.6l-1.8,1.8l-7.5-7.5l0.1-0.1l-0.1-0.1l7.5-7.5l1.8,1.8l-5.8,5.8L13.2,20.6z M31.2,10.9h-3.8v10.3h-2.6V10.9H21V8.7h10.2V10.9z M34.7,21.2h-2.5v-9.3h2.5V21.2z M34.7,10.8h-2.5V8.6h2.5V10.8z M41.3,13.7h-1.5v4.9c0,0.4,0,0.6,0.1,0.7c0.1,0.1,0.4,0.1,0.9,0.1c0.1,0,0.2,0,0.2,0s0.2,0,0.2,0v1.8l-1.1,0c-1.1,0-1.9-0.2-2.3-0.6c-0.3-0.3-0.4-0.7-0.4-1.3v-5.7h-1.3V12h1.3V9.4h2.4V12h1.5V13.7z M45.4,21.2h-2.4V8.7h2.4V21.2z M56.2,17.3h-6.8c0,0.9,0.4,1.6,1,2c0.4,0.2,0.8,0.3,1.3,0.3c0.6,0,1-0.1,1.3-0.4c0.2-0.2,0.4-0.4,0.5-0.6h2.5c-0.1,0.6-0.4,1.1-0.9,1.7c-0.8,0.9-2,1.4-3.5,1.4c-1.2,0-2.3-0.4-3.3-1.1c-0.9-0.8-1.4-2-1.4-3.7c0-1.6,0.4-2.8,1.3-3.7c0.9-0.9,2-1.3,3.3-1.3c0.8,0,1.5,0.1,2.2,0.4c0.6,0.3,1.2,0.7,1.6,1.4c0.4,0.6,0.6,1.2,0.7,1.9c0,0,0,0.1,0,0.1h-2.5c-0.1-0.6-0.3-1-0.6-1.4c-0.4-0.3-0.9-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.3,0.4-0.6,0.8-0.6,1.4h3.1h1.1h2.5C56.2,16.1,56.2,16.6,56.2,17.3z M76.1,16.2h-4.6v4.6h-3v-4.6h-4.6v-3h4.6V8.7h3v4.6h4.6V16.2z\" />\n</svg>\n\n\nAlternatively it can be created in script using:\n\n\tcreate widget as \"com.livecode.widget.headerbar\"\n\n## Using the Header Bar\n\nThe header bar gets a `mouseUp` message when it is clicked on, you \nhandle this message to take the appropriate action for the chosen \naction.\n\nThe default `mouseUp` handler of the header bar is\n\n\ton mouseUp\n\t   local tActionName\n\t   put the mouseAction of me into tActionName\n\n\t   if tActionName is not empty then\n\t\t  -- Execute script triggered by the given action\n\t   end if\n\tend mouseUp\n\t\nFirstly we get the value of the `mouseAction` property, which gives us \nthe name of the header action that was just clicked, allowing us to do \nsomething different depending of what action was clicked. For example\n\n\ton mouseUp\n\t   local tActionName\n\t   put the mouseAction of me into tActionName\n\n\t   if tActionName is \"back\" then\n\t\t  go to card \"messageList\"\n\t   else if tAction is \"add\" then\n\t\t  go to card \"newMessage\"\n\t   end if\n\tend mouseUp\n\t\n> **Note:** it is import to remember that the `mouseAction` property \n> gives you the action name, not the label. Both can be set in the \n> Property Inspector.\n\n![Property Inspector 1](images/pi-1.png)\n\nThe label is the text that is displayed for an action, when the Action \ndisplay style is set to “text”. The name is the name of the action, as \nreturned by the `mouseAction` property.\n\n## Customising the Header Bar\n\nThe actions displayed in the header bar, and the appearance of the header bar itself, can be controlled using the Property Inspector.\n\nThe header bar can: \n\n* Show a title\n* Have the first action on the left\n* Have an opaque background\n* Have a bottom border\n* Use icons or text for displaying actions\n\nThe Property Inspector also allows you to set up all the actions that \nare shown on the header bar, setting the label, icon and highlight icon \nfor each action and allowing you to reorder, add and delete actions.\n\n![Property Inspector 2](images/pi-2.png)\n\nWhen one of the icons is clicked, a scrollable icon picker is popped up \nto allow you to choose a new icon. The current selection is highlighted \nas shown.\n\n![Icon picker](images/icon-picker.png)\n\nThe icon and highlighted icon can be different, to allow further visual \nfeedback about what is currently selected.\n\nThe colors of the navigation bar are controlled by the \n`foregroundColor`, `backgroundColor`, `borderColor`, and `hiliteColor` \nproperties as usual for LiveCode controls. Changing these properties \nallows you to customise the header bar to fit in with the design of your \napp.\n\n## Examples\n\nMessages Header\n\n![Messages app header Android](images/android-messages.png)\n![Messages app header iOS](images/ios-messages.png)\n\nNotes Header\n\n![Notes app header Android](images/android-notes.png)\n![Notes app header iOS](images/ios-notes.png)\n\n## Scripting\nBeyond handling the `mouseUp` message and using the `mouseAction` \nproperty to act on the selected action the other thing you might want to \ndo with your header is to update it depending on the state of the app. \nFor example if you choose to edit an item in a list the header options \nmight change to “cancel” and “save”, or similar. You can change the \nheader actions in script by setting the `itemLabels`, `itemNames`, \n`itemIcons` or `hilitedItemIcons` properties of the header bar widget. \nThe values of these properties are comma-delimited lists and can be \nupdated using chunk expressions.\n\nThis example shows how to switch a header bar action between “edit” and \n“done”\n\n![Header bar edit](images/header-change-1.png)\n![Header bar done](images/header-change-2.png)\n\n\ton mouseUp\n\t\tlocal tActionName, tActionNames, tActionLabels\n\t\tput the mouseAction of me into tActionName \n\t\tput the itemNames of me into tActionNames \n\t\tput the itemLabels of me into tActionLabels \n\n\t\tif tActionName is \"edit\" then \n\t\t\tput \"done\" into item 2 of tActionNames \n\t\t\tput \"Done\" into item 2 of tActionLabels \n\t\t\tset the itemNames of me to tActionNames \n\t\t\tset the itemLabels of me to tActionLabels \n\t\telse if tActionName is \"done\" then \n\t\t\tput \"edit\" into item 2 of tActionNames \n\t\t\tput \"Edit\" into item 2 of tActionLabels \n\t\t\tset the itemNames of me to tActionNames \n\t\t\tset the itemLabels of me to tActionLabels \n\t\tend if \n\tend mouseUp\n\t\n## Switching Theme\nSetting the `theme` of the header bar to \"Android\" or \"iOS\" will \ntemporarily display it using the metrics of the chosen platform. This\nproperty is transient - it is not saved with the stack as it uses the \nappropriate mobile theme for the platform is is running on."
}