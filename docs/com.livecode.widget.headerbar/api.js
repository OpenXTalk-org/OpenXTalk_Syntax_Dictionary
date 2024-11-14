{
			"id":"com.livecode.widget.headerbar-1",
			"name":"com.livecode.widget.headerbar",
			"display name":"Header Bar",
			"library":"com.livecode.widget.headerbar",
			"type":"widget",
			"display syntax":[
				"Header Bar"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"A header bar intended for use by mobile apps.\n\nThe header bar has a <label(property)>, which is displayed as its\ntitle, along with a set of actions.  Each action has a\n<itemNames|name>, which is used to identify it internally, and an\n<itemIcons|icon> and <itemLabels|label> which are displayed (depending\non the chosen <itemStyle>).  One of the actions can optionally be\ndisplayed to the left of the header bar's title, when the\n<firstItemLeft> property is enabled.\n\nThe header bar widget provides two theme modes, one for Android apps\nand one for iOS apps.  By default, it automatically selects the\nappropriate one depending on which platform it is running on.  To\ntemporarily select a non-default different appearance, set the\n<theme(property)> property.\n\nThe header bar widget works well when paired with the navigation bar\nwidget.",
			"description":"A header bar intended for use by mobile apps.\n\nThe header bar has a <label(property)>, which is displayed as its\ntitle, along with a set of actions.  Each action has a\n<itemNames|name>, which is used to identify it internally, and an\n<itemIcons|icon> and <itemLabels|label> which are displayed (depending\non the chosen <itemStyle>).  One of the actions can optionally be\ndisplayed to the left of the header bar's title, when the\n<firstItemLeft> property is enabled.\n\nThe header bar widget provides two theme modes, one for Android apps\nand one for iOS apps.  By default, it automatically selects the\nappropriate one depending on which platform it is running on.  To\ntemporarily select a non-default different appearance, set the\n<theme(property)> property.\n\nThe header bar widget works well when paired with the navigation bar\nwidget.",
			"references":{
				"property":["firstItemLeft","itemIcons","itemLabels","itemNames","itemStyle","label","theme"]
			}
		},{
			"id":"com.livecode.widget.headerbar-2",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"com.livecode.widget.headerbar",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Sent when the header bar is clicked",
			"examples":[{
				"script":"on mouseUp\n   local tActionName\n   put the mouseAction of the target into tActionName\n   if tActionName is not empty then\n      answer merge(\"The [[tActionName]] action was clicked\")\n   else\n      answer \"Try clicking on an action\"\n   end if\nend mouseUp"
			}],
			"description":"The <mouseUp> message is sent when the header bar is clicked.",
			"references":{
				"property":["mouseAction"]
			}
		},{
			"id":"com.livecode.widget.headerbar-3",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The text color",
			"description":"The <foreColor> property controls the color of the header bar's\n<label|title text>.",
			"references":{
				"property":["label"]
			}
		},{
			"id":"com.livecode.widget.headerbar-4",
			"name":"backcolor",
			"display name":"backColor",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The background color",
			"description":"The <backColor> property controls the color of the header bar's\nbackground.",
			"references":{
				"property":["opaque"]
			}
		},{
			"id":"com.livecode.widget.headerbar-5",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The color of the actions' icons and text",
			"description":"The <hiliteColor> property controls the color of the text and icons of\nthe header bar's actions.",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels","itemStyle"]
			}
		},{
			"id":"com.livecode.widget.headerbar-6",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The border color",
			"description":"The <borderColor> property controls the color of the header bar's\nborder.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"com.livecode.widget.headerbar-7",
			"name":"showborder",
			"display name":"showBorder",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether the header bar has a dividing line at the bottom",
			"description":"If the <showBorder> property is `true`, a dividing line at the bottom\nof the header bar is drawn using the <borderColor>.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"com.livecode.widget.headerbar-8",
			"name":"opaque",
			"display name":"opaque",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the opaque of <widget>",
				"set the opaque of <widget> to {true | false}"
			],
			"display syntax":[
				"get the opaque of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether the background of the header bar is filled",
			"description":"If the <opaque> property is `true`, the background of the header bar\nis filled with the <backColor>.",
			"references":{
				"property":["backColor"]
			}
		},{
			"id":"com.livecode.widget.headerbar-9",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The icons for actions when not highlighted.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the header bar actions.  These are the icons displayed by\neach action when not currently highlighted.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\nIf you set the <itemIcons> to a string that has more items than the\ncurrent number of actions, the header bar will automatically create a\nnew header action with a default label and name.\n\nHowever, setting the <itemIcons> to a string that has _fewer_ items\nthan the current number of actions doesn't remove an action; it just\nresets any further actions to the default icon.",
			"references":{
				"property":["itemArray","hilitedItemIcons"]
			}
		},{
			"id":"com.livecode.widget.headerbar-10",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <actionStyle>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The display style for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The way that actions are displayed.\n- \"icons\": Show the icons\n- \"text\": Show the labels"
			}],
			"description":"Determines whether header bar actions are displayed with their icons\nor their labels.",
			"references":{
				"property":["firstItemLeft"]
			}
		},{
			"id":"com.livecode.widget.headerbar-11",
			"name":"firstitemleft",
			"display name":"firstItemLeft",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the firstItemLeft of <widget>",
				"set the firstItemLeft of <widget> to { true | false }"
			],
			"display syntax":[
				"get the firstItemLeft of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether to display the first action on the left",
			"description":"If the <firstItemLeft> property is `true`, then the first action in the\n<itemArray> is displayed on the left hand side of the header bar.\n\n**Note:** In some <theme|themes>, the first action always has its\nlabel displayed when <firstItemLeft> is `true`.  If you don't want\nthis to happen, you can set the action's <itemLabels|label> to the\nempty string.",
			"references":{
				"property":["itemArray","theme","itemLabels"]
			}
		},{
			"id":"com.livecode.widget.headerbar-12",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <names>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The identifying names for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of action names"
			}],
			"description":"The names of the header bar actions.\n\nThe <itemNames> are used to identify the header bar actions, but are\nnot ever displayed by the header bar.  Use the <itemLabels> to control\nthe text displayed for each action.",
			"references":{
				"property":["itemArray","itemLabels"]
			}
		},{
			"id":"com.livecode.widget.headerbar-13",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The icons for actions when highlighted.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the header bar actions.  These are the icons displayed by\neach action when highlighted.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\nIf you set the <hilitedItemIcons> to a string that has more items than the\ncurrent number of actions, the header bar will automatically create a\nnew header action with a default label and name.\n\nHowever, setting the <hilitedItemIcons> to a string that has _fewer_ items\nthan the current number of actions doesn't remove an action; it just\nresets any further actions to the default icon.",
			"references":{
				"property":["itemArray","itemIcons"]
			}
		},{
			"id":"com.livecode.widget.headerbar-14",
			"name":"label",
			"display name":"label",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the label of <widget>",
				"set the label of <widget> to <title>"
			],
			"display syntax":[
				"get the label of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The title displayed by the header bar.",
			"value":[{
				"name":"value",
				"type":"string",
				"description":"The text of the title of the header bar."
			}],
			"description":"The text displayed by the header bar as its title.",
			"references":{
				"property":["showLabel"]
			}
		},{
			"id":"com.livecode.widget.headerbar-15",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the itemArray of <widget>",
				"set the itemArray of <widget> to <array>"
			],
			"display syntax":[
				"get the itemArray of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The full header action data.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array containing all the action data"
			}],
			"description":"The <itemArray> is a number-indexed array that contains all of the\ninformation about the header widget's actions.  It combines the data\naccessible via the <itemIcons>, <hilitedItemIcons>, <itemLabels> and\n<itemNames> properties.\n\nThe structure of the <itemArray> must be:\n\n```\n{\n\tkey (integer): The index of the navigation item\n\tvalue (array): The array containing the data for the item at this index\n\t{\n\t\tkey : \"name\"\n\t\tvalue (string): The name of this item\n\t\tkey : \"label\"\n\t\tvalue (string): The label of this item\n\t\tkey : \"icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is not highlighted\n\t\tkey : \"hilited_icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is highlighted\n\t}\n}\n```",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels","itemNames"]
			}
		},{
			"id":"com.livecode.widget.headerbar-16",
			"name":"showlabel",
			"display name":"showLabel",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the showLabel of <widget>",
				"set the showLabel of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showLabel of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether or not to display a title",
			"description":"Controls whether the header bar displays the <label(property)> as a\ntitle (`true`) or whether no title is shown (`false`).",
			"references":{
				"property":["label"]
			}
		},{
			"id":"com.livecode.widget.headerbar-17",
			"name":"mouseaction",
			"display name":"mouseAction",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the mouseAction of <widget>"
			],
			"display syntax":[
				"get the mouseAction of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The header action that the mouse pointer is currently over.",
			"examples":[{
				"script":"-- Go to the previous card when the header's \"back\" action is\n-- clicked.\non mouseUp\n   if the mouseAction of the target is \"back\" then\n      go previous\n   end if\nend mouseUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The name of the header action that the mouse pointer is currently\nover."
			}],
			"description":"The <mouseAction> property contains the <itemNames|name> of the action\nthat was just clicked, or empty when no action was clicked.\n\nYou can read the <mouseAction> property to detect which action was\nactivated when handling the <mouseUp> message.",
			"references":{
				"property":["itemNames"],
				"message":["mouseUp"]
			}
		},{
			"id":"com.livecode.widget.headerbar-18",
			"name":"theme",
			"display name":"theme",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the theme of <widget>",
				"set the theme of <widget> to <widgetTheme>"
			],
			"display syntax":[
				"get the theme of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The theme to use when drawing the header bar.",
			"value":[{
				"name":"value",
				"type":"string",
				"description":"The name of a theme supported by the header bar."
			}],
			"description":"The <theme> controls the general appearance of the header bar.  The\nheader widget currently supports \"native\", \"iOS\" and \"Android\".  If\nthe <theme> is set to \"native\", then the header widget will use either\nthe \"iOS\" or \"Android\" theme depending on the platform that LiveCode\nis running on.\n\n>*Note*: The value of the <theme> property is not saved by the header\nbar. Set the <theme> property to preview the way the header bar will\nappear when used on an Android or iOS device.\n\n>*Warning*: The meaning and behaviour of the <theme> property is\nexperimental and is subject to change in a future release."
		},{
			"id":"com.livecode.widget.headerbar-19",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"com.livecode.widget.headerbar",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labels>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The labels for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of action labels."
			}],
			"description":"The labels of the header bar actions.\n\nThe <itemLabels> are displayed by the header bar widget when the\n<itemStyle> is set to show text for each action.",
			"references":{
				"property":["itemArray","itemStyle"]
			}
		}